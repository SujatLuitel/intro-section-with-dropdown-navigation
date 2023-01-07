const open = document.getElementById('open');
const mobileNav = document.getElementById('mobile-nav');
const close = document.getElementById('close');
const navTitle = document.getElementById('nav-title');
const navTitleCompany = document.getElementById('navtitle-company');
const dropdown = document.getElementById('dropdown');
const dropdownCompany = document.getElementById('dropdown-company');
const darkBg = document.getElementById('dark-bg');
open.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    mobileNav.classList.toggle('show');
    darkBg.classList.toggle('show');
});
close.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    mobileNav.classList.toggle('show');
    darkBg.classList.toggle('show');
});
navTitle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})
navTitleCompany.addEventListener('click', () => {
    dropdownCompany.classList.toggle('show');
})
