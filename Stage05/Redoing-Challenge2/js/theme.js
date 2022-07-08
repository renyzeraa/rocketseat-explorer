import { buttonDark, buttonLight } from './elements.js'

const body = document.querySelector('body')

function themeFunction() {
  buttonLight.addEventListener('click', () => {
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
    body.classList.add('theme-dark')
  })

  buttonDark.addEventListener('click', () => {
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    body.classList.remove('theme-dark')
    body.classList.add('theme-light')
  })
}
themeFunction()
export default themeFunction
