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

sr.reveal(`.home__data,.footer__container`)
sr.reveal(`.home__card`,{delay:600,distance:'100px',interval:100})
sr.reveal(`.about__data`,{origin:'right'})
sr.reveal(`.about__image`,{origin:'left'})
sr.reveal(`.popular__card`,{interval:200})