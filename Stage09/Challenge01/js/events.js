// animation menu mobile
import showMenu from './nav.js'
// animation stats
import stats from './stats.js'
// slide photos #about
import aboutSlide from './about.js'
// slide logos #securities
import slideAuto from './securities.js'
// scroll events
import eventScroll from './scroll.js'

export default function exec() {
  showMenu()
  stats()
  aboutSlide()
  setInterval(slideAuto, 700)

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

  // events with scroll
  window.addEventListener('scroll', eventScroll)
}
