import { header, navHeight, logoHeader } from './elements.js'

export default function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    logoHeader.setAttribute('src', './assets/imgs/logo/logo-white.png')
  } else {
    header.classList.remove('scroll')
    logoHeader.setAttribute('src', './assets/imgs/logo/logo-black.png')
  }
}
