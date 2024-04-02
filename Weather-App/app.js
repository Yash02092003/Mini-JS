// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=85e9cc8077bbde5cd0a031f2bb3c450c&units=metric

let cityname = 'new york';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname +'&appid=85e9cc8077bbde5cd0a031f2bb3c450c&units=metric';

// async function checkWeather(){
//     const response = await fetch(apiUrl);
//     console.log(response)
//     var data = await response.json();

//     console.log(data)
// }

let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener('click' , function(){
    let val = input.value;
    let cityname = val;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=85e9cc8077bbde5cd0a031f2bb3c450c&units=metric")
    .then(function(res){
        if(res.status === 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else
        {
            return res.json();
        }
    })
    .then(function(data){
        // console.log(data)
        // 
        domManipulation(data);
    })
    .catch(function(err){
        console.log(err);
    }) 
})
function domManipulation(data){
    let weather = document.querySelector(".weather-icon");
    console.log(data)
    if(data.weather[0].main === "Haze"){
        weather.setAttribute("src" , `./images/drizzle.png`)
    }
    else if(data.weather[0].main === "Clear"){
        weather.setAttribute("src" , "./images/clear.png")
    }
    else if(data.weather[0].main === "Clouds"){
        weather.setAttribute("src" , "./images/clouds.png")
    }
    else if(data.weather[0].main === "Drizzle"){
        weather.setAttribute("src" , "./images/drizzle.png")
    }
    else if(data.weather[0].main === "Mist"){
        weather.setAttribute("src" , "./images/mist.png")
    }
    else if(data.weather[0].main === "Rain"){
        weather.setAttribute("src" , "./images/rain.png")
    }
    else if(data.weather[0].main === "Snow"){
        weather.setAttribute("src" , "./images/snow.png")
    }

    let temp = document.querySelector(".temp");
    let city = document.querySelector(".city");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");

    temp.innerHTML = Math.round(data.main.temp) + "C";
    city.innerHTML = data.name;
    humidity.innerHTML = Math.round(data.main.humidity);
    wind.innerHTML = Math.round(data.wind.speed) + "Km/h";

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block"
}
