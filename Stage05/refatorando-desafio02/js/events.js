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
import {
  pressButton,
  playAudio,
  adjustVolume,
  forestAudio,
  coffeeAudio,
  rainAudio,
  fireAudio,
  buttonPressAudio
} from './sounds.js'
import Controls from './controls.js'
import {
  countdown,
  resetTimer,
  pauseTimer,
  lessTimer,
  mostTimer
} from './timer.js'

const sounds = {
  pressButton,
  playAudio,
  adjustVolume,
  forestAudio,
  coffeeAudio,
  rainAudio,
  fireAudio,
  buttonPressAudio
}
const controls = Controls({
  buttonPlay,
  buttonPause
})

// buttons
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  sounds.pressButton(sounds.buttonPressAudio)
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  sounds.pressButton(sounds.buttonPressAudio)
  pauseTimer()
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  sounds.pressButton(sounds.buttonPressAudio)
  resetTimer()
})

buttonLess.addEventListener('click', () => {
  sounds.pressButton(sounds.buttonPressAudio)
  lessTimer()
})

buttonMost.addEventListener('click', () => {
  sounds.pressButton(sounds.buttonPressAudio)
  mostTimer()
})

forestButton.addEventListener('click', () => {
  sounds.pressButton(sounds.buttonPressAudio)
  controls.toggle(forestCard)
  sounds.playAudio(sounds.forestAudio, forestCard)
})

forestVolume.addEventListener('input', () => {
  sounds.adjustVolume(sounds.forestAudio, forestVolume.value)
})

rainButton.addEventListener('click', function () {
  sounds.pressButton(sounds.buttonPressAudio)
  controls.toggle(rainCard)
  playAudio(sounds.rainAudio, rainCard)
})

rainVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.rainAudio, rainVolume.value)
})

fireButton.addEventListener('click', function () {
  sounds.pressButton(sounds.buttonPressAudio)
  controls.toggle(fireCard)
  sounds.playAudio(sounds.fireAudio, fireCard)
})

fireVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.fireAudio, fireVolume.value)
})

coffeeButton.addEventListener('click', function () {
  sounds.pressButton(sounds.buttonPressAudio)
  controls.toggle(coffeeCard)
  sounds.playAudio(sounds.coffeeAudio, coffeeCard)
})

coffeeVolume.addEventListener('input', function () {
  sounds.adjustVolume(sounds.coffeeAudio, coffeeVolume.value)
})
