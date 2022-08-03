const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

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

const count1Html = document.querySelector('.count1')
const count2Html = document.querySelector('.count2')
const count3Html = document.querySelector('.count3')

let count1 = +count1Html.textContent
let count2 = +count1Html.textContent
let count3 = +count1Html.textContent

function updateDisplay(count2, count3) {
  count2Html.textContent = String(count2)
  count3Html.textContent = String(count3)
}
function updateDisplay1(count1) {
  count1Html.textContent = String(count1)
}

function countdown1() {
  setTimeout(() => {
    let count1 = +count1Html.textContent
    if (count1 <= 9980) {
      count1 = count1 + 20
    }
    updateDisplay1(count1)
    countdown1()
  }, 0.7)
}

function countdown() {
  setTimeout(() => {
    let count2 = +count2Html.textContent
    let count3 = +count3Html.textContent

    if (count2 <= 19) {
      ++count2
    }

    if (count3 <= 14) {
      ++count3
    }

    updateDisplay(count2, count3)

    countdown()
  }, 90)
}
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
}

showSlides(slideIndex)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .logo-home, #home .text, #stats .stats,
  #services header, #services .card,
  #about .text, #about .slideshow-container, #contact .links, #contact .maps
  footer .logo, footer .social
  `,
  { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

if (window.innerHeight > 700) {
  countdown()
  countdown1()
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  if (window.scrollY > 250) {
    countdown()
    countdown1()
  }

  // activateMenuAtCurrentSection()
})
