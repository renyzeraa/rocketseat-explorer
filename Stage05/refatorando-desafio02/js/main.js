import themeFunction from './theme.js'
themeFunction

const buttonPlay = document.querySelector('.buttonPlay')
const buttonPause = document.querySelector('.buttonPause')
const buttonStop = document.querySelector('.buttonStop')
const buttonLess = document.querySelector('.buttonLess')
const buttonMost = document.querySelector('.buttonMost')
const buttonCardsForest = document.querySelector('.cardButton')
const minutesHtml = document.querySelector('.minutes')
const secondsHtml = document.querySelector('.seconds')
let minutes = +minutesHtml.textContent
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesHtml.textContent = String(minutes).padStart(2, '0')
  secondsHtml.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let minutes = +minutesHtml.textContent
    let seconds = +secondsHtml.textContent

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControls()
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
buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
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
