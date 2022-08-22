const { Router } = require('express')

const UsersController = require('../controller/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes
