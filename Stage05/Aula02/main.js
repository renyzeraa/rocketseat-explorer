const inputNumber = document.querySelector('.input-number')
const randomNumber = Math.round(Math.random() * 100)

let xAttempts = 0

function hitNumber() {
  document.querySelector('.container1').classList.add('hide')
  document.querySelector('.container2').classList.remove('hide')
  document.querySelector('.xAttempts').innerText = xAttempts
}

function handleClick(event) {
  event.preventDefault()

  xAttempts++

  if (+inputNumber.value == randomNumber) {
    hitNumber()
  }
}
