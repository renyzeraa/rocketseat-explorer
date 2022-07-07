const kitchenTimerAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const forestAudio = new Audio('./sounds/forest.wav')
const coffeeAudio = new Audio('./sounds/coffee.wav')
const rainAudio = new Audio('./sounds/rain.wav')
const fireAudio = new Audio('./sounds/fire.wav')

buttonPressAudio.volume = 0.02
kitchenTimerAudio.volume = 0.05

export {
  forestAudio,
  coffeeAudio,
  rainAudio,
  kitchenTimerAudio,
  buttonPressAudio,
  fireAudio
}

// coffeeAudio.play()
// rainAudio.play()
// fireAudio.play()

// function pressButton(button) {
//   button.play()
// }

// function timeEnd() {
//   pressButton(kitchenTimerAudio)
// }

// function playAudio(sound, card) {
//   sound.loop = true
//   let isActive = card.classList.contains('active')
//   isActive === false ? sound.pause() : sound.play()
// }

// function adjustVolume(sound, volume) {
//   sound.volume = volume
// }

// function hideShowButton(hideButton, showButton) {
//   hideButton.classList.add('hide')
//   showButton.classList.remove('hide')
// }

// function play() {
//   hideShowButton(buttonPlay, buttonPause)
// }

// function pause() {
//   hideShowButton(buttonPause, buttonPlay)
// }

// function toggle(card) {
//   card.classList.toggle('active')
// }
