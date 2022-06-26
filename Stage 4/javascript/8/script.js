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


  Usando o switch
  
*/

let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada
 
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    
  `)
  )

  switch (option) {
    case 1: //opção 1 rodando
      let item = prompt('Digite o nome do item')
      items.push(item)
      break //quebrar a condição
    case 2: //opção 2 rodando
      if (items.length == 0) {
        alert('Não existem itens cadastrados')
      } else {
        alert(items)
      }
      break
    case 3:
      alert('Tchau')
      break
    default:
      alert('Opção inválida. Tente novamente')
  }
}
