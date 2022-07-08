import { buttonDarkTheme, buttonLightTheme } from './elements.js'

export default function Theme() {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
  }

  function toggle(hideButton, showButton) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      showButton.classList.remove('hide')
      hideButton.classList.add('hide')
      setTheme('theme-light')
    } else {
      showButton.classList.remove('hide')
      hideButton.classList.add('hide')
      setTheme('theme-dark')
    }
  }

  ;(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
      buttonLightTheme.classList.remove('hide')
      buttonDarkTheme.classList.add('hide')
      setTheme('theme-light')
    } else {
      buttonDarkTheme.classList.remove('hide')
      buttonLightTheme.classList.add('hide')
      setTheme('theme-dark')
    }
  })()
  return {
    toggle
  }
}
