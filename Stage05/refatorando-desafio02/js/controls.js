import timer from './timer.js'
timer
const buttonCards = document.querySelector('.cardButton')
const buttonPlay = document.querySelector('.buttonPlay')
const buttonPause = document.querySelector('.buttonPause')
const buttonStop = document.querySelector('.buttonStop')
const buttonLess = document.querySelector('.buttonLess')
const buttonMost = document.querySelector('.buttonMost')

function controlS() {
  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown(timer)
  })

  buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
  })

  buttonStop.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    resetTimer()
  })
}
controlS()
export default controlS = {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMost,
  buttonLess
}
