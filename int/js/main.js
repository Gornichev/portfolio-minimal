
(function(){

    const toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) {

            header.classList.add('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };
    const doc = document.documentElement;
    const w = window;

    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    const header = document.getElementById('site-header');

    const checkScroll = function () {

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            direction = 2;
        } else if (curScroll < prevScroll) {
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };


    window.addEventListener('scroll', checkScroll);

})();

// Swiper
const swiper = new Swiper('.swiper-cert', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 500,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        },

    }
});

// navigation

const btnMenu = document.querySelector("#btn-show-menu");
const hideMenu = document.querySelector("#btn-hide-menu");
const body = document.querySelector("body");
const menu = document.querySelector("#menu");

btnMenu.onclick = function() {
    btnMenu.classList.add("hide");
    body.classList.add("overlay");
    menu.classList.add("show");
}

hideMenu.onclick = function() {
    btnMenu.classList.remove("hide");
    body.classList.remove("overlay");
    menu.classList.remove("show");
}
// click button language
