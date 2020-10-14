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

const submit = document.querySelector('.contacts__form-button').addEventListener('click', e => {
    e.preventDefault()
    const popup = document.querySelector('.success__popup')
    const popupBg = document.querySelector('.popup__bg')
    const popupExit = document.querySelector('.success__exit')

    popupBg.classList.toggle('success__bg-active')
    popup.classList.toggle('success__popup-active')

    popupBg.addEventListener('click', () => {
        popupBg.classList.remove('success__bg-active')
        popup.classList.remove('success__popup-active')
    })

    popupExit.addEventListener('click', () => {
        popupBg.classList.remove('success__bg-active')
        popup.classList.remove('success__popup-active')
    })
})

$(document).ready(function(){
    $('.recommendation__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 471,
                settings: {
                    slidesToShow: 1
                }
            }
            
        ]
    });
});