$(function() {

    $('.login-menu').on('click', function() {
        $('.header__top-btns').toggleClass('header__top-btns--active')
    })

    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('menu--active')
    });
    
})