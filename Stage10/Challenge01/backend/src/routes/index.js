const { Router } = require('express')

const usersRouter = require('./user.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)
routes.use('/sessions', sessionsRoutes)

module.exports = routes
