// orientação a objetos
export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    // na pagina pegar o historico dela

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    //handle = manipular algo
    //pegar na minha pagina o locar onde ta pathname(nome que quero)
    const { pathname } = window.location
    //ira pegar so / sem a propriedade, de forma desestruturada
    //dentro das chaves irei colocar o que quer pegar.
    const route = this.routes[pathname] || routes[404]
    //buscar a rota, mas se nao tiver, ira mostrar 404
    fetch(route)
      //fetch pega algo, e then() pega e retorna uma promessa(promisses) ou executa uma função
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
    // quando clicar no home, quero que apareca minha pagina, usamos o promisses(promessa).
    //ele ira ler la no servidor e ira mandar um json com as informações que pedi
  }
}

//reutilizar codigos
