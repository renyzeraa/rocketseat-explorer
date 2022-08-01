const { Router } = require('express')

const TagsController = require('../controller/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', tagsController.index)

module.exports = tagsRoutes
