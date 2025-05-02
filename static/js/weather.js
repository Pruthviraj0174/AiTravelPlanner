/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu'),
      navToggle=  document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

// validate if toggle exits

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
} 

// validate if constant exits

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp=document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:3000,
    delay:400,

})

//weather

let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let key = `9df2e2286b0299c797d8803240cf1812`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + "')";

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `/static/tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `/static/tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `/static/tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `/static/tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `/static/tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `/static/tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `/static/tempicons/clouds.svg`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;
        
    })
    country.value = "";
    city.value = "";
})
