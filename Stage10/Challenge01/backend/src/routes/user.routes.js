const { Router, response } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const UsersController = require('../controller/UsersController')
const UsersAvatarController = require('../controller/UserAvatarController')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const usersAvatarController = new UsersAvatarController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update
)

module.exports = usersRoutes
