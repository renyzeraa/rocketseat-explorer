const { Router, response } = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const UsersController = require('../controller/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)
const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  (req, res) => {
    console.log(req.file.filename)
    res.json()
  }
)

module.exports = usersRoutes
