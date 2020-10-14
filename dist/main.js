'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

var time = 3600;
var countDownEl = document.querySelector('.timer');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    var hours = 3;
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownEl.innerHTML = hours + ' : ' + minutes + ' : ' + seconds;
    time--;
}

var submit = document.querySelector('.contacts__form-button').addEventListener('click', function (e) {
    e.preventDefault();
    var popup = document.querySelector('.success__popup');
    var popupBg = document.querySelector('.popup__bg');
    var popupExit = document.querySelector('.success__exit');

    popupBg.classList.toggle('success__bg-active');
    popup.classList.toggle('success__popup-active');

    popupBg.addEventListener('click', function () {
        popupBg.classList.remove('success__bg-active');
        popup.classList.remove('success__popup-active');
    });

    popupExit.addEventListener('click', function () {
        popupBg.classList.remove('success__bg-active');
        popup.classList.remove('success__popup-active');
    });
});

$(document).ready(function () {
    $('.recommendation__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 601,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 471,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});