// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-mobile');
const menuNav = document.querySelector('.menu-mobile-nav');
const menuIcons = document.querySelectorAll('.menu-mobile-icon');
const navItems = document.querySelectorAll('.nav-mobile-item');
const mobileLogo=document.querySelector('.mobile-logo');

const headerEl = document.querySelector('.webheader');

const homeBtn = document.querySelector('.home-link');
const homeBtn1 = document.querySelector('.home-link1');
const cntBtn = document.querySelector('.cnt-link');
const cntBtn1 = document.querySelector('.cnt-link1');

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

//Change navigation color

/*cntBtn.addEventListener('click',navColorChange);
function navColorChange(){
    const root = document.querySelector(':root');
    const color = getComputedStyle(root).getPropertyValue('--webnav-color').trim();
    root.style.setProperty('--webnav-color', color === '#0d7f8b' ? '#fff' : '#0d7f8b');
}*/

cntBtn.onclick = () => {
    document.querySelector(':root').style.setProperty('--webnav-color', '#0d7f8b');
    document.querySelector(':root').style.setProperty('--logo-color', '#592c1a');
    localStorage.setItem('nav-color1', '#0d7f8b'); 
    localStorage.setItem('nav-color2', '#592c1a');
};
cntBtn1.onclick = () => {
    document.querySelector(':root').style.setProperty('--webnav-color', '#0d7f8b');
    document.querySelector(':root').style.setProperty('--logo-color', '#592c1a');
    localStorage.setItem('nav-color1', '#0d7f8b'); 
    localStorage.setItem('nav-color2', '#592c1a');
};
homeBtn.onclick = () => {
    document.querySelector(':root').style.setProperty('--webnav-color', '#fff');
    document.querySelector(':root').style.setProperty('--logo-color', '#fff');
    localStorage.setItem('nav-color1', '#fff'); 
    localStorage.setItem('nav-color2', '#fff');
};
homeBtn1.onclick = () => {
    document.querySelector(':root').style.setProperty('--webnav-color', '#fff');
    document.querySelector(':root').style.setProperty('--logo-color', '#fff');
    localStorage.setItem('nav-color1', '#fff'); 
    localStorage.setItem('nav-color2', '#fff');
};
window.onload = () => {
    if (localStorage.getItem('nav-color1')) {
          document.querySelector(':root').style.setProperty('--webnav-color', localStorage.getItem('nav-color1'));
    }
    if (localStorage.getItem('nav-color2')) {
        document.querySelector(':root').style.setProperty('--logo-color', localStorage.getItem('nav-color2'));
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

// responseble
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