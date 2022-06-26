// Primeiro declarar as variaveis que vou modificar ou atribuir um valor
// Clean code (variaveis com nomes significativos)
// Se necessario refatoração (nao copiar o mesmo codigo varias vezes, fazer uma funcao)
// lembrar das regras de algoritmos, se , senao, atribuir valores, tranformar em texto, numero, etc.

/* ===== MINHAS VARIAVEIS ===== */
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent) //transforma uma string em numero
let timerTimeOut // variavel para nao executar o timer

/* ===== MUSICAS ===== */
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)
const bgAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
)
bgAudio.loop = true

/* ===== FUNCOES ===== */
function resetControls(/* quando eu não declaro quais variaveis vou receber, o JS procura antes dessa funcao no escopo global*/) {
  //funcao para resetar os controles do timer
  // dentro da funcao tem a programação imperativa
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  // atualizar o display (minutos e segundos)
  // colocar o restultado do calcula numa string para visualizar na pagina
  // padStart preenche de dado inicial (total de caracteres, 'o que ira acrescentar')
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    //A função setTimeout() leva dois parâmetros. Primeiro uma função a ser executada e depois quanto tempo (em ms).
    //funcao que executa a partir de um tempo CALLBACK
    let seconds = Number(secondsDisplay.textContent) // pega o que esta na tela do cliente e altera para numero, conteudo de texto para Number
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0) //pegando os minutes e colocando seconds como zero para decrementar ele depois

    if (minutes == 0 && seconds == 0) {
      // se minutos for zero e segundos for 0, parar e resetar os controles e tempo
      resetControls() // quando chamo so a funcao, se chama programação declarativa
      resetTimer()
      kitchenTimer.play()

      return //para de executar
    }

    if (seconds <= 0) {
      // se'if' (for verdade) {ira acontecer algo, escopo}
      //quando zera ele recebe 60 -1 e diminui os minutos
      seconds = 60 //atualiza os segundos para 0
      --minutes // decrementar minha variavel com -1
    }

    updateTimerDisplay(minutes, String(seconds - 1)) // tira 1 segundo e mantem os minutos

    countdown() // colocar a propria função dentro dela para que execute novamente
  }, 1000) // tempo para executar a funcao callback
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

/* ===== BOTOES PARA EVENTOS ===== */
// variavel.adicio um evento nela.(como ira adicionar, click, rolagem da pag, etc.)
// play
buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')

  countdown()
  buttonPressAudio.play()
})

// pause
buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut) // clear para o set, para no caso
  buttonPressAudio.play()
})

// stop e reset
buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
  buttonPressAudio.play()
})

// som ligado
buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  bgAudio.pause()
})

//som desligado
buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  bgAudio.play()
})

// pergunta de quantos minutos sera
buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos de estudo?') //declarar o que recebi do prompt como meu novo minuto para checar se digitou um valor ou nao
  if (!newMinutes) {
    // ! não
    alert('Você digitou nenhum valor')
    resetTimer()
    return
  } else {
    minutes = newMinutes
    updateTimerDisplay(minutes, 0) // atualiza os minutos e mantem em zero os segundos.
  }
})
