import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonLess,
  buttonMost
} from './elements.js'
import './timer.js'
import {
  countdown,
  resetTimer,
  pauseTimer,
  lessTimer,
  mostTimer
} from './timer.js'

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  pauseTimer()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  resetTimer()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  resetTimer()
})

buttonLess.addEventListener('click', () => {
  lessTimer()
})

buttonMost.addEventListener('click', () => {
  mostTimer()
})
