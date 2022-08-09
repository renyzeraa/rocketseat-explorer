import { imagesCarousel, imgCarousel } from './elements.js'

let idx = 0

export default function slideAuto() {
  idx++

  let tamanhoFinal = window.innerWidth < 700 ? 208 : 152
  if (idx >= imgCarousel.length - 1) {
    idx = 0
  }
  imagesCarousel.style.transform = `translateX(${-idx * tamanhoFinal}px)`
}
