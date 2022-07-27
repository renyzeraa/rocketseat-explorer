const { Router } = require('express')

const userRoutes = require('./user.routes')

const routes = Router()

routes.use('/users', userRoutes)

module.exports = routes
