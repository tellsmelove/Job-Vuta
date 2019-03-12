$(document).ready(() => {
    require('./swiper');
    require('./calender');
    var getToggleAside = document.querySelector('[data-toggle-menu]');
    
    getToggleAside.addEventListener('click', function () {
        
        let eToggle = getToggleAside.dataset.toggleMenu;
        
        let menu_target = document.querySelector(eToggle);
        let menu_li = menu_target.querySelectorAll("li")
        if (menu_li.length && menu_target) {
            var total_height = menu_li[0].clientHeight * menu_li.length;
        }
        if (menu_target.classList[menu_target.classList.length - 1] == "active") {
            menu_target.style.height = 0;
            menu_target.style.borderTopWidth = 0;
        } else {
            menu_target.style.height = total_height + 15 + "px";
            menu_target.style.borderTopWidth = "1px";
        }
        menu_target.classList.toggle('active');
        console.log(menu_target.classList[menu_target.classList.length - 1] == "active")
    })
})