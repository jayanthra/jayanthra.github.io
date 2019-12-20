const hambrgBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const profilePic = document.querySelector('.menu-pic');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

hambrgBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hambrgBtn.classList.add('close');
        menu.classList.add('show');
        profilePic.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

    } else {
        hambrgBtn.classList.remove('close');
        menu.classList.remove('show');
        profilePic.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    }

    showMenu = !showMenu;
}