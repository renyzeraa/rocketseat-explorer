const { Router } = require('express')

const userRoutes = require('./user.routes')
const notesRoutes = require('./notes.routes')

const routes = Router()
routes.use('/users', userRoutes)
routes.use('/notes', notesRoutes)

module.exports = routes
