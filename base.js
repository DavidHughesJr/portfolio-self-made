// ***** OPEN MOBILE NAV MENU  ***** // 
const nav = document.querySelector('.nav')
const mobileNav = document.getElementById('mobile-nav')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeHamburger = document.querySelector('.close-hamburger-menu')

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-mobile-hidden')
    mobileNav.classList.toggle('nav-mobile-active')
    
})