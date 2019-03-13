new Swiper('.swiper-person', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.pagination-person',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        440: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

    }
});

new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },
});