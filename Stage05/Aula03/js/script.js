const form = document.querySelector('form')
const weight = document.querySelector('#peso')
const height = document.querySelector('#altura')
const buttonSubmit = document.querySelector('.button')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.js-imc')
const buttonCloseModal = document.querySelector('.close')

const alertError = document.querySelector('.alert-error')

weight.oninput = () => alertError.classList.remove('open')
height.oninput = () => alertError.classList.remove('open')

form.onsubmit = event => {
  event.preventDefault()
  peso = Number(weight.value)
  altura = Number(height.value)

  if (isNaN(peso) || isNaN(altura) || peso == '' || altura == '') {
    alertError.classList.add('open')
    return
  } else {
    alertError.classList.remove('open')
    const result = IMC(peso, altura)

    modalWrapper.classList.add('open')
    modalMessage.innerHTML = result

    buttonCloseModal.addEventListener('click', () => {
      modalWrapper.remove('open')
    })
  }
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
