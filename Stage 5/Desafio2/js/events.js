import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonLightTheme,
  buttonDarkTheme,
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

export default function ({ timer, controls, sounds, theme }) {
  buttonPlay.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPressAudio)
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPressAudio)
    controls.pause()
    timer.hold()
  })

  buttonStop.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPressAudio)
    controls.pause()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPressAudio)
    timer.plus()
  })

  buttonMinus.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPressAudio)
    timer.minus()
  })

  forestButton.addEventListener('click', function () {
    controls.toggle(forestCard)
    sounds.playAudio(sounds.forestAudio, forestCard)
  })

  forestVolume.addEventListener('input', function () {
    sounds.adjustVolume(sounds.forestAudio, forestVolume.value)
  })

  rainButton.addEventListener('click', function () {
    controls.toggle(rainCard)
    sounds.playAudio(sounds.rainAudio, rainCard)
  })

  rainVolume.addEventListener('input', function () {
    sounds.adjustVolume(sounds.rainAudio, rainVolume.value)
  })

  fireButton.addEventListener('click', function () {
    controls.toggle(fireCard)
    sounds.playAudio(sounds.fireAudio, fireCard)
  })

  fireVolume.addEventListener('input', function () {
    sounds.adjustVolume(sounds.fireAudio, fireVolume.value)
  })

  coffeeButton.addEventListener('click', function () {
    controls.toggle(coffeeCard)
    sounds.playAudio(sounds.coffeeAudio, coffeeCard)
  })

  coffeeVolume.addEventListener('input', function () {
    sounds.adjustVolume(sounds.coffeeAudio, coffeeVolume.value)
  })

  buttonLightTheme.addEventListener('click', function () {
    theme.toggle(buttonLightTheme, buttonDarkTheme)
  })

  buttonDarkTheme.addEventListener('click', function () {
    theme.toggle(buttonDarkTheme, buttonLightTheme)
  })
}
