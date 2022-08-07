import { header, logoHeader, sections, backToTopButton } from './elements.js'

export default function scroll() {
  // scroll events
  function activeButton() {
    if (window.scrollY > 600) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  function changeHeaderWhenScroll() {
    if (window.scrollY > 1) {
      header.classList.add('scroll')
      logoHeader.setAttribute('src', './assets/imgs/logo/logo-white.png')
    } else {
      header.classList.remove('scroll')
      logoHeader.setAttribute('src', './assets/imgs/logo/logo-black.png')
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
          .querySelector(`nav ul li a[href*= '${sectionId}']`)
          .classList.add('active')
      } else {
        document
          .querySelector(`nav ul li a[href*= '${sectionId}']`)
          .classList.remove('active')
      }
    }
  }
  activeButton()
  activateMenuAtCurrentSection()
  changeHeaderWhenScroll()
}
