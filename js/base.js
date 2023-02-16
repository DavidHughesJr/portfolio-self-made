// ***** OPEN MOBILE NAV MENU  ***** // 
const nav = document.querySelector('.nav')
const mobileNav = document.getElementById('mobile-nav')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeHamburger = document.querySelector('.close-hamburger-menu')

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-mobile-active')
    if (mobileNav.classList.contains('nav-mobile-active'))
        mobileNav.classList.remove('nav-mobile-hidden')
    else mobileNav.classList.add('nav-mobile-hidden')
})

// ***** LIGHT MODE DARK MODE  ***** // 
const toggle = document.getElementById("theme-toggle");
const toggleBtn = document.querySelector('.toggle-btn')


const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

if (storedTheme === 'dark') {
    toggleBtn.classList.add('ri-sun-fill')
}

toggle.addEventListener('click', () => {


    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {

        targetTheme = "dark"
    }
    toggleBtn.classList.toggle('ri-sun-fill')
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);

})
