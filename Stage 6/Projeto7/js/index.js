import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add(404, '/pages/404.html')
//o script sempre lê linha a linha ASSINCRONO
//promisses enta dentro do assincronismo

// const routes = {
//   //estruturar objeto
//   //mapeamento das paginas.html
//   //quando a propriedade recebe '/' barra, tem que usar aspas entre a propriedade
//   '/': '/pages/home.html', //"nome da propriedade e" = "onde ela ta"
//   '/about': '/pages/about.html',
//   '/contact': '/pages/contact.html',
//   404: '/pages/404.html' // númerico não recebe aspas
// }

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
