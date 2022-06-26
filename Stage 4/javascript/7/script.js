/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`Digite a opção desejada 
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do Programa`)
  )

  if (option == 1) {
    let item = prompt(`Digite o nome do item`)
  } else if (option == 2) {
    if (items.length == 0) {
      alert(`Não existe nenhum item cadastrado`)
    } else {
      alert(items)
    }
  } else {
    alert(`Fechando a aplicação`)
  }
  console.log(option, items)
}
