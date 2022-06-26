/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

  Se acertar de primeira, colocar um alert diferente.
*/

let result = prompt('Adivinhe o número que estou pensando? Está entre o 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt('Erro, tente novamente:')
  xAttempts++
}
if (xAttempts == 1) {
  alert('Parabens! Achou o número na primeira tentativa!')
} else {
  alert('Parabens! Achou o número em ' + xAttempts + ' tentativas!')
}
