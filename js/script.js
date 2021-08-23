let loginBtn = document.querySelector('.login-menu');
let topBtns = document.querySelector('.header__top-btns');
let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');

loginBtn.onclick = function() {
    topBtns.classList.toggle('header__top-btns--active');
};

menuBtn.onclick = function() {
    menu.classList.toggle('menu--active');
};