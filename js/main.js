let mySearchBtn = document.getElementById('searchbtn');
let mylist = [];
mySearchBtn.addEventListener('click', function(){
    let mySearchValue = document.getElementById("searchValue").value;
    
    if(!mySearchValue){
        alert("Please Enter City Name !!!!!!");
    }else{
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mySearchValue}&appid=695363e2aab07ef937bf9a44028eb7df`)
        .then(resonse => resonse.json())
        .then(data =>{
            mylist = data;
            display();
        })
        .catch(err => alert("The City Not Found"))
    }
    
})
function display(){
    if(mylist.cod == 404){
        alert("City Not Found")
    }
    else{
        let temperature = Math.round(mylist.main.temp -273);
        let cityName = mylist.name;
        let Description = mylist.weather[0].description; 
        let humidity = mylist.main.humidity;
        let speed = mylist.wind.speed;
        let iconNumber = mylist.weather[0].icon;
        let iconurl =`https://openweathermap.org/img/wn/${iconNumber}@4x.png`
        console.log(iconNumber);
        let cartona =``;
        cartona +=`<div class="col-12">
            <img src=${iconurl} height="100" width="100" class="rounded-circle"alt="">
            <h4>${temperature} <sup>oC</sup></h4>
            <h4>${cityName}</h4>
            <h4>${Description}</h4>
          </div>
          <div class="row">
            <div class="col-6">
              <i class="fa-solid fa-wind"></i><span>${humidity}</span>
              <p>humidity</p>
            </div>
            <div class="col-6">
              <i class="fa-solid fa-wind"></i><span>${speed}</span>
              <p>humidity</p>
            </div>
          </div>`
          document.getElementById('myCartona').innerHTML =cartona;
    }
}