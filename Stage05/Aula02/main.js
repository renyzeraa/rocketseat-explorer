const inputNumber = document.querySelector('.input-number')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 0

function hitNumber() {
  document.querySelector('.container1').classList.add('hide')
  document.querySelector('.container2').classList.remove('hide')
  document.querySelector('.xAttempts').innerText = xAttempts
}

function resetPage() {
  document.querySelector('.container1').classList.remove('hide')
  document.querySelector('.container2').classList.add('hide')
}

function handleClick(event) {
  event.preventDefault()
  xAttempts++

  if (+inputNumber.value == randomNumber) {
    hitNumber()
  }

  inputNumber.value = ''
}

function restartGame() {
  xAttempts = 0

  const button2 = document.querySelector('.btn2')
  button2.addEventListener('click', resetPage())
  randomNumber = Math.round(Math.random() * 10)

  return randomNumber, xAttempts
}
