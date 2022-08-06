import { nav, toggle, links } from './elements.js'

// animation menu mobile
export default function showMenu() {
  for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show')
    })
  }
  for (const link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }
}
