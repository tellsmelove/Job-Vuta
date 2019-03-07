$(document).ready(() => {
    var getToggleAside = document.querySelector('[data-toggle-menu]');
    var eToggle = getToggleAside.dataset.toggleMenu;

    var menu_target = document.querySelector(eToggle);
    var menu_li = menu_target.querySelectorAll("li")
    if (menu_li.length && menu_target) {
        var total_height = menu_li[0].clientHeight * menu_li.length;
    }

    getToggleAside.addEventListener('click', function () {
        console.log(total_height)
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