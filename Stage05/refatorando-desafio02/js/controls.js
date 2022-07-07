import './elements.js'

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
