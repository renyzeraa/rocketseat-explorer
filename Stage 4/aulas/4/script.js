/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Qual nome do aluno?')
let n1 = prompt('Primeira nota')
let n2 = prompt('Segunda nota')
let n3 = prompt('Terceira nota')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert('Parabéns, ' + student + ', sua média foi de: ' + average)
} else {
  alert(
    student +
      ' você é capaz de atingir uma nota melhor, estude para a recuperação! ' +
      average
  )
}
