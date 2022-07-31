const { Router } = require('express')

const usersRoutes = Router()

usersRoutes.post('/', (resquest, response) => {
  const { name, email, password } = resquest.body

  response.json({ name, email, password })
})

module.exports = usersRoutes
