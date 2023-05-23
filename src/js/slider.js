import {Swiper, Navigation, Thumbs} from "swiper";

const swiper = new Swiper(".swiperThumbs", {
    direction:  window.innerWidth < 768 ? 'horizontal' :'vertical',
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: true
});
const swiper2 = new Swiper(".mySwiper2", {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
