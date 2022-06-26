/*Bora praticar e rever tudo o que foi ensinado na aula? 
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).*/

let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma = ' + sum)
alert('Subtração = ' + sub)
alert('Multiplicação = ' + mult)
alert('Divisão = ' + div)
alert('Resto da divisão = ' + restDiv)

if (restDiv == 0) {
  alert('A soma dos dois número é par' + sum)
} else {
  alert('A soma dos dois número é impar' + sum)
}

if (numberOne == numberTwo) {
  alert('Os números digitados são iguais')
} else {
  alert('Os números digitados são diferentes')
}
