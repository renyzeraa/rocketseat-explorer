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
    logoHeader.setAttribute('src', './assets/imgs/logo-white.png')
  } else {
    header.classList.remove('scroll')
    logoHeader.setAttribute('src', './assets/imgs/logo-black.png')
  }
}
const count1Html = document.querySelector('.count1')
const count2Html = document.querySelector('.count2')
const count3Html = document.querySelector('.count3')

let count1 = +count1Html.textContent
let count2 = +count1Html.textContent
let count3 = +count1Html.textContent

function updateDisplay(count1, count2, count3) {
  count1Html.textContent = String(count1)
  count2Html.textContent = String(count2)
  count3Html.textContent = String(count3)
}
function countdown() {
  setTimeout(() => {
    let count1 = +count1Html.textContent
    let count2 = +count2Html.textContent
    let count3 = +count3Html.textContent

    if (count1 <= 19000) {
      count1 = count1 + 1000
    }

    if (count2 <= 19) {
      ++count2
    }

    if (count3 <= 14) {
      ++count3
    }

    updateDisplay(count1, count2, count3)

    countdown()
  }, 100)
}

if (window.scrollY > 100) {
  countdown()
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .logo-home, #home .text, #stats .stats,
  #services header, #services .card,
  #about .text, #about .image-slide,
  #securities header, #securities .securities, #contact .links, #contact .maps
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

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  countdown()
  // activateMenuAtCurrentSection()
})
