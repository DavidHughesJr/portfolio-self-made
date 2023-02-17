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

// ***** ON SCROLL ANIMATIONS  ***** //
const itemsToScrollUp = document.querySelectorAll('.scroll-up')
const itemsToZoomIn = document.querySelectorAll('.scale-in')
const itemsToScrollUpMin = document.querySelectorAll('.scroll-up-min')
const allAnimationClasses = [...itemsToScrollUp, ...itemsToScrollUpMin,...itemsToZoomIn, ]


const handleOnScroll = (entries) => {


    entries.forEach((entry) => {
    
        if (entry.isIntersecting && entry.target.classList.contains('scroll-up')) {
            entry.target.classList.add('scroll-up-animation')
            entry.target.classList.remove('mode-hidden')
        }
        if (entry.isIntersecting && entry.target.classList.contains('scroll-up-min')) {
            entry.target.classList.add('scroll-up-animation-min')
            entry.target.classList.remove('mode-hidden')
        }
        if (entry.isIntersecting && entry.target.classList.contains('scale-in')) {
            entry.target.classList.add('scale-in-animation')
            entry.target.classList.remove('mode-hidden')
        }
        
    })

  
}

const onScrollObserver = new IntersectionObserver(handleOnScroll, {
    root: null,
    threshold: .5,
})
allAnimationClasses.forEach((item) => {
    onScrollObserver.observe(item)
    item.classList.add('mode-hidden')
})


