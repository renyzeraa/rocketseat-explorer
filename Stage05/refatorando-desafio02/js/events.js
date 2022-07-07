import { buttonPlay, buttonPause, buttonStop } from './elements.js'
import './timer.js'
import { countdown, resetTimer, hold } from './timer.js'

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  hold()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  resetTimer()
})
