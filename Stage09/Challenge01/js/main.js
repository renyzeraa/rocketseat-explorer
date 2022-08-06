// animation menu mobile
import showMenu from './nav.js'
import stats from './stats.js'

showMenu()
stats()

//modify logo menu #header
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

// slide logos securities
const imagesCarousel = document.getElementById('js-imgs')
const imgCarousel = document.querySelectorAll('#js-imgs img')
let idx = 0

// button back to top
const backToTopButton = document.querySelector('.back-to-top')
// most section menu
const sections = document.querySelectorAll('main section[id]')

//modify logo menu #header
function changeHeaderWhenScroll() {
  const logoHeader = document.querySelector('#header nav a img')

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    logoHeader.setAttribute('src', './assets/imgs/logo/logo-white.png')
  } else {
    header.classList.remove('scroll')
    logoHeader.setAttribute('src', './assets/imgs/logo/logo-black.png')
  }
}

// slide photos #about
let slideIndex = 1
function plusSlides(n) {
  showSlides((slideIndex += n))
}
function currentSlide(n) {
  showSlides((slideIndex = n))
}
function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')

  if (slideIndex > 6) {
    slideIndex = 6
  }
  if (slideIndex < 1) {
    slideIndex = 1
  }

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = 1
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'

  const tabContent = document.querySelectorAll('.js-tabcontent section')

  function activeTab(slideIndex) {
    tabContent.forEach(section => {
      section.classList.remove('actualtab')
    })

    tabContent[slideIndex - 1].classList.add('actualtab')
  }
  activeTab(slideIndex)
}
showSlides(slideIndex)
//modify text
//

//
// slide logos #securities
function slideAuto() {
  idx++

  let tamanhoFinal = window.innerWidth < 700 ? 208 : 165
  if (idx >= imgCarousel.length - 1) {
    idx = 0
  }
  imagesCarousel.style.transform = `translateX(${-idx * tamanhoFinal}px)`
}
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

// stats desktop

// events with scroll
function eventScroll() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}
window.addEventListener('scroll', eventScroll)
