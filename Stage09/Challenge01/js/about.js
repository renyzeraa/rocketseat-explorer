import { prevButton, nextButton } from './elements.js'

export default function aboutSlide() {
  let slideIndex = 1
  let dots = document.querySelectorAll('.js-dot')

  function plusSlides() {
    showSlides((slideIndex += 1))
  }
  function decSlides() {
    showSlides((slideIndex += -1))
  }

  prevButton.addEventListener('click', decSlides)
  nextButton.addEventListener('click', plusSlides)

  function currentSlide(n) {
    showSlides((slideIndex = n))
  }

  dots.forEach((element, index) => {
    element.addEventListener('click', () => {
      currentSlide(index)
    })
  })

  function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')

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
}
