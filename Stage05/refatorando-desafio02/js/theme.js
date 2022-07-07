function themeFunction() {
  const buttonLight = document.querySelector('.lightTheme')
  const buttonDark = document.querySelector('.darkTheme')
  const body = document.querySelector('body')

  buttonLight.addEventListener('click', () => {
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
    body.classList.toggle('theme-dark')
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
