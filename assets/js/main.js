/*   NAV MENU ::: Toggle - Close */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU qd on clique sur un lien du menu Home, Contact...*/
const navLink = document.querySelectorAll('.nav__link')

const linkClicked = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(elementMenu => elementMenu.addEventListener('click', linkClicked))

/*  ==========  SCROLL => CHANGE HEADER BACKGROUND ==========*/ 
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY > 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*  ============= SHOW SCROLL UP ==============  */
const scrollShowUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollShowUp)

/*  =============  SCROLL SECTIONS ACTIVE LINK ==============  */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } 
        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)

/*  =============  SCROLL REVEAL ANIMATION ==============  */
const sr = ScrollReveal({ 
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`, {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home__burger`, {delay: 1200, distance: '100px', duration: 1500})
sr.reveal(`.home__ingredient`, {delay: 1600, interval: 100})

sr.reveal(`.recipe__img, .delivery__mets, .contact__image`, {origin: 'left'})
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, {origin: 'right'})

sr.reveal(`.popular__card`, {interval: 100})
