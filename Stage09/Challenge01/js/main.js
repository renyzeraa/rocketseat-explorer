// animation menu mobile
import showMenu from './nav.js'
showMenu()

// animation stats
import stats from './stats.js'
stats()

// slide photos #about
import aboutSlide from './about.js'
aboutSlide()

//modify logo menu #header
import changeHeaderWhenScroll from './header.js'

// slide logos #securities
import slideAuto from './securities.js'
setInterval(slideAuto, 700)

// button back to top
const backToTopButton = document.querySelector('.back-to-top')
// most section menu
const sections = document.querySelectorAll('main section[id]')

// animations scrolls
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 400,
  reset: true
})
scrollReveal.reveal(
  `#home .logo-home, #home .text, #stats .stats,
  #services header, #services .card,
  #about .text, #about .slideshow-container, #contact .links, #contact .maps , footer 
  `,
  { interval: 100 }
)

// button back to top
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// active animation menu
function activateMenuAtCurrentSection() {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*='${sectionId}']`)
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// events with scroll
function eventScroll() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}
window.addEventListener('scroll', eventScroll)
