
// const nav = document.querySelector('#header');
// const navTop = nav.offsetTop;

// function stickyNavigation() {
//     console.log('navTop = ' + navTop);
//     console.log('scrollY = ' + window.scrollY);

//     if (window.scrollY >= navTop) {
//         // nav offsetHeight = height of nav
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('fixed-nav');
//     }
// }

// window.addEventListener('scroll', stickyNavigation);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let header = document.querySelector('header');
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos && window.pageYOffset !== 0) {
        header.classList.add('affix')
    } else {
        header.classList.remove('affix')
    }
    if (window.pageYOffset == 0) {
        header.classList.remove('affix')
    }
    prevScrollpos = currentScrollPos;
}