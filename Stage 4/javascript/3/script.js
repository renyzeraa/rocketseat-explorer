/* Capturar dois numero e fazer as operações matematica

soma
subtração
multiplicação
divisao
resto divisao

*/

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
