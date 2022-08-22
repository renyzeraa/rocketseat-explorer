const { Router } = require('express')

const SessionsController = require('../controller/SessionsController')
const sessionsController = new SessionsController()
const sessionsRoutes = Router()

sessionsRoutes.post('/', sessionsController.create)

module.exports = sessionsRoutes
