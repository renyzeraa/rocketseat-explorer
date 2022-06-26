/*Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let names = []
let averages = []
for (let i = 0; i < 4; i++) {
  let nomeAluno = prompt('Digite seu nome')
  let nota1 = prompt('Digite sua primeira nota: ')
  let nota2 = prompt('Digite sua segunda nota: ')
  nota1 = parseFloat(nota1)
  nota2 = parseFloat(nota2)
  let average = (nota1 + nota2) / 2

  names[i] = nomeAluno // n de name
  averages[i] = average // m para medias
}
for (let i = 0; i < 4; i++) {
  if (averages[i] > 7) {
    alert(
      'A média do(a) aluno(a) ' +
        names[i] +
        ' é: ' +
        averages[i] +
        '\n Parabens, ' +
        names[i] +
        '! Você foi aprovado(a) no concurso!'
    )
  } else {
    alert(
      'A média do(a) aluno(a) ' +
        names[i] +
        ' é: ' +
        averages[i] +
        '\n Não foi dessa vez, ' +
        names[i] +
        '! Tente novamente!'
    )
  }
}
