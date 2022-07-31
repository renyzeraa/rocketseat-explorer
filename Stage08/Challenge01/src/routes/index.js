const { Router } = require('express')

const usersRouter = require('./user.routes')

const routes = Router()

routes.use('/users', usersRouter)

module.exports = routes
