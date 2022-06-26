export default function () {
  const kitchenTimerAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const forestAudio = new Audio('../sounds/Floresta.wav')
  const coffeeAudio = new Audio('../sounds/Cafeteria.wav')
  const rainAudio = new Audio('../sounds/Chuva.wav')
  const fireAudio = new Audio('../sounds/Lareira.wav')

  buttonPressAudio.volume = 0.02
  kitchenTimerAudio.volume = 0.05

  function pressButton(button) {
    button.play()
  }

  function timeEnd() {
    pressButton(kitchenTimerAudio)
  }

  function playAudio(sound, card) {
    sound.loop = true
    let isActive = card.classList.contains('active')
    isActive === false ? sound.pause() : sound.play()
  }

  function adjustVolume(sound, volume) {
    sound.volume = volume
  }

  return {
    pressButton,
    timeEnd,
    playAudio,
    adjustVolume,
    forestAudio,
    coffeeAudio,
    rainAudio,
    fireAudio,
    buttonPressAudio
  }
}
