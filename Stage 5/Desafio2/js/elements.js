const buttonPlay = document.querySelector('.buttonPlay')
const buttonPause = document.querySelector('.buttonPause')
const buttonStop = document.querySelector('.buttonStop')
const buttonPlus = document.querySelector('.buttonPlus')
const buttonMinus = document.querySelector('.buttonMinus')
const buttonLightTheme = document.querySelector('.lightTheme')
const buttonDarkTheme = document.querySelector('.darkTheme')

const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.rain')
const fireCard = document.querySelector('.fire')
const coffeeCard = document.querySelector('.coffee-shop')

const forestButton = forestCard.querySelector('.cardButton')
const rainButton = rainCard.querySelector('.cardButton')
const fireButton = fireCard.querySelector('.cardButton')
const coffeeButton = coffeeCard.querySelector('.cardButton')

const forestVolume = forestCard.querySelector('input')
const rainVolume = rainCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
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
  coffeeVolume,
  minutesDisplay,
  secondsDisplay
}
