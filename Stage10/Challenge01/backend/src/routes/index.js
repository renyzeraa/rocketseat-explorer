const { Router } = require('express')

const usersRouter = require('./user.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)

module.exports = routes
