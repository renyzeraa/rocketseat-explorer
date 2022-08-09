// animation menu mobile
import showMenu from './nav.js'
showMenu()
// animation stats
import statsEvent from './stats.js'
// slide photos #about
import aboutSlide from './about.js'
aboutSlide()
// slide logos #securities
import slideAuto from './securities.js'
setInterval(slideAuto, 1000)

//modify logo menu #header
import scroll from './scroll.js'

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

function execFunctions() {
  statsEvent()
  scroll()
}

window.addEventListener('scroll', execFunctions)
