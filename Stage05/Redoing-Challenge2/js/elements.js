const buttonPlay = document.querySelector('.buttonPlay')
const buttonPause = document.querySelector('.buttonPause')
const buttonStop = document.querySelector('.buttonStop')
// increase and decrease minutes
const buttonLess = document.querySelector('.buttonLess')
const buttonMost = document.querySelector('.buttonMost')
// theme
const buttonLight = document.querySelector('.lightTheme')
const buttonDark = document.querySelector('.darkTheme')
// minutes and seconds
const minutesHtml = document.querySelector('.minutes')
const secondsHtml = document.querySelector('.seconds')
// sounds
const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.rain')
const fireCard = document.querySelector('.fire')
const coffeeCard = document.querySelector('.coffee-shop')
// card-active
const forestButton = forestCard.querySelector('.cardButton')
const rainButton = rainCard.querySelector('.cardButton')
const fireButton = fireCard.querySelector('.cardButton')
const coffeeButton = coffeeCard.querySelector('.cardButton')
// volume
const forestVolume = forestCard.querySelector('input')
const rainVolume = rainCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonLess,
  buttonMost,
  buttonLight,
  buttonDark,
  minutesHtml,
  secondsHtml,
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
}
