const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.post('/', notesController.create)
notesRoutes.put('/:id', notesController.update)

module.exports = notesRoutes
