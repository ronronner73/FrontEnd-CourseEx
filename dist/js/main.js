// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');
const menuNav = document.querySelector('.menu-mobile-nav');
const menuIcons = document.querySelectorAll('.menu-mobile-icon');
const navItems = document.querySelectorAll('.nav-mobile-item');
const mobileLogo=document.querySelector('.mobile-logo');

const headerEl = document.querySelector('.webheader');

//Initial State of Menu
let showMenu = false;


menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        mobileLogo.classList.add('color');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuIcons.forEach(item => item.classList.add('show'));
        navItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        mobileLogo.classList.remove('color');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuIcons.forEach(item => item.classList.remove('show'));
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu state
        showMenu = false;

    }
}

//Change color
function setColor(){
    if($(".menu-web-nav").hasClass("current")){
        if(and($("#home").hasClass("top"))){
            document.getElementById("bw").style.color = "#fff";
        }
     }
}

// Navigation scroll
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        headerEl.classList.add('webheader-scrolled');
        headerEl.classList.add('line');
    }else if(window.scrollY <=50){
        headerEl.classList.remove('webheader-scrolled');
        headerEl.classList.remove('line');
    }
});

//Horizontal scrolling of images

var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidsPerGroup:3,
    loop:true,
    centerSlide:"true",
    fade:"true",
    grabCursor:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation:{
        prevEl:"wiper-button-prev",
        nextEl:".swiper-button-next",
    },

// responsble
    breakpoints: {
        0:{
            slidesPerView:2,
        },
        550:{
            slidesPerView:3,
        },
        768: {
            slidesPerView:2,
        },
        1000:{
            slidesPerView:3,
        },
    },
  });