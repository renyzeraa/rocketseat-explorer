const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddFive = document.querySelector('.addfive')
const buttonRemoveFive = document.querySelector('.removefive')
const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRaining = document.querySelector('.raining')
const buttonSoundCoffeeShop = document.querySelector('.coffeeshop')
const buttonSoundFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

/* ====== Audios ====== */
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

const forestAudio = new Audio('./sounds/Floresta.wav')
const rainingAudio = new Audio('./sounds/Chuva.wav')
const coffeeShopAudio = new Audio('./sounds/Cafeteria.wav')
const firePlaceAudio = new Audio('./sounds/Lareira.wav')

forestAudio.loop = true
rainingAudio.loop = true
coffeeShopAudio.loop = true
firePlaceAudio.loop = true

/* ====== FUNCOES ====== */
let actualAudioPlaying
function isThisAudioPlaying(audio) {
  const isThisAudioPlaying = actualAudioPlaying === audio

  if (isThisAudioPlaying) {
    audio.pause()
    actualAudioPlaying = false
    return true
  }

  return false
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  pauseTimer()
  updateTimerDisplay(minutes, 0)
}

function pauseTimer() {
  clearTimeout(timerTimerOut)
}

function addFiveMinutes() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  if (minutes >= 55) {
    updateTimerDisplay(59, seconds)
    alert('Não é possivel adicionar mais que 60 minutos no timer')
    return
  } else {
    updateTimerDisplay(String(minutes + 5), seconds)
  }
}

function removeFiveMinutes() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  if (minutes <= 4) {
    // updateTimerDisplay(minutes, 0)
    // resetTimer()
    alert('Não é possivel retirar 5 minutos do timer')
  } else {
    updateTimerDisplay(String(minutes - 5), seconds)
  }
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      kitchenTimer.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}
/* ===== BUTTONS ===== */

// play
buttonPlay.addEventListener('click', function () {
  buttonPressAudio.play()
  countdown()
  buttonPlay.classList.add('hide')
  // if (!timerTimerOut) {
  //   countdown()
  // }
})

//stop
buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  updateTimerDisplay(minutes, 0)
  resetTimer()
  buttonPressAudio.play()
})

//addfive
buttonAddFive.addEventListener('click', function () {
  buttonPressAudio.play()

  addFiveMinutes()
})

//removefive
buttonRemoveFive.addEventListener('click', function () {
  buttonPressAudio.play()

  removeFiveMinutes()
})

buttonSoundForest.addEventListener('click', function () {
  buttonSoundForest.classList.toggle('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.remove('select')

  if (isThisAudioPlaying(forestAudio)) {
    return
  }
  if (actualAudioPlaying) {
    actualAudioPlaying.pause()
  }

  forestAudio.play()
  actualAudioPlaying = forestAudio
})

buttonSoundRaining.addEventListener('click', function () {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.toggle('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.remove('select')
  if (isThisAudioPlaying(rainingAudio)) {
    return
  }
  if (actualAudioPlaying) {
    actualAudioPlaying.pause()
  }

  rainingAudio.play()
  actualAudioPlaying = rainingAudio
})

buttonSoundCoffeeShop.addEventListener('click', function () {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.toggle('select')
  buttonSoundFirePlace.classList.remove('select')
  if (isThisAudioPlaying(coffeeShopAudio)) {
    return
  }
  if (actualAudioPlaying) {
    actualAudioPlaying.pause()
  }
  coffeeShopAudio.play()
  actualAudioPlaying = coffeeShopAudio
})

buttonSoundFirePlace.addEventListener('click', function () {
  buttonSoundForest.classList.remove('select')
  buttonSoundRaining.classList.remove('select')
  buttonSoundCoffeeShop.classList.remove('select')
  buttonSoundFirePlace.classList.toggle('select')
  if (isThisAudioPlaying(firePlaceAudio)) {
    return
  }
  if (actualAudioPlaying) {
    actualAudioPlaying.pause()
  }
  firePlaceAudio.play()
  actualAudioPlaying = firePlaceAudio
})

// para tirar e colocar a classe select, com o background azul, usar o toggle no classlist.
