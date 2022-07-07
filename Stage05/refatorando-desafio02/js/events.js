import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonLess,
  buttonMost,
  forestCard,
  rainCard,
  fireCard,
  coffeeCard,
  forestButton,
  rainButton,
  fireButton,
  coffeeButton,
  forestVolume,
  rainVolume,
  fireVolume,
  coffeeVolume
} from './elements.js'
import './timer.js'
import {
  forestAudio,
  coffeeAudio,
  rainAudio,
  kitchenTimerAudio,
  buttonPressAudio,
  fireAudio
} from './sounds.js'
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

forestButton.addEventListener('click', () => {
  forestAudio.play()
})

// forestVolume.addEventListener('input', function () {
//   sounds.adjustVolume(sounds.forestAudio, forestVolume.value)
// })

// rainButton.addEventListener('click', function () {
//   controls.toggle(rainCard)
//   sounds.playAudio(sounds.rainAudio, rainCard)
// })

// rainVolume.addEventListener('input', function () {
//   sounds.adjustVolume(sounds.rainAudio, rainVolume.value)
// })

// fireButton.addEventListener('click', function () {
//   controls.toggle(fireCard)
//   sounds.playAudio(sounds.fireAudio, fireCard)
// })

// fireVolume.addEventListener('input', function () {
//   sounds.adjustVolume(sounds.fireAudio, fireVolume.value)
// })

// coffeeButton.addEventListener('click', function () {
//   controls.toggle(coffeeCard)
//   sounds.playAudio(sounds.coffeeAudio, coffeeCard)
// })

// coffeeVolume.addEventListener('input', function () {
//   sounds.adjustVolume(sounds.coffeeAudio, coffeeVolume.value)
// })
