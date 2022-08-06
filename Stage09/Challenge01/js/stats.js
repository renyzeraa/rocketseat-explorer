import { count1Html, count2Html, count3Html } from './elements.js'

// animations stats
export default function stats() {
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
    }, 8)
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
    }, 180)
  }

  if (window.innerWidth > 900) {
    countdown()
    countdown1()
  }

  function eventScroll() {
    if (window.scrollY > 100) {
      countdown()
      countdown1()
    }
  }
  window.addEventListener('scroll', eventScroll)
}
