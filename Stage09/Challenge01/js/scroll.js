import { backToTopButton, sections } from './elements.js'
import changeHeaderWhenScroll from './header.js'
//modify logo menu #header

export default function eventScroll() {
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

  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}
