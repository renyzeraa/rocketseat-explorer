// nav animations
const nav = document.querySelector('.js-nav')
const toggle = document.querySelectorAll('.js-toggle')
const links = document.querySelectorAll('nav ul li a')

// animations stats
const count1Html = document.querySelector('.js-count1')
const count2Html = document.querySelector('.js-count2')
const count3Html = document.querySelector('.js-count3')

// slide photos #about
const prevButton = document.querySelector('.js-prev')
const nextButton = document.querySelector('.js-next')

//modify logo menu #header
const logoHeader = document.querySelector('#header nav a img')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

// slide logos securities
const imagesCarousel = document.getElementById('js-imgs')
const imgCarousel = document.querySelectorAll('#js-imgs img')

// button back to top
const backToTopButton = document.querySelector('.back-to-top')

export {
  nav,
  toggle,
  links,
  count1Html,
  count2Html,
  count3Html,
  nextButton,
  prevButton,
  header,
  navHeight,
  logoHeader,
  imagesCarousel,
  imgCarousel,
  backToTopButton
}
