const disableScroll = function() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = paddingOffset
}

const burger = document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.menu')
    this.classList.toggle('menu-icon__active')
    menu.classList.toggle('menu__active')
    disableScroll()

    let links = document.querySelectorAll('.menu__link').forEach(element => {
        element.onclick = () => {
            menu.classList.toggle('menu__active')
            this.classList.toggle('menu-icon__active')
            disableScroll()
        }
    })
})

let time = 3600
const countDownEl = document.querySelector('.timer')

setInterval(updateCountDown, 1000)

function updateCountDown() {
    const hours = 3
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countDownEl.innerHTML = `${hours} : ${minutes} : ${seconds}`
    time--
}

$(document).ready(function(){
    $('.recommendation__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 421,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});