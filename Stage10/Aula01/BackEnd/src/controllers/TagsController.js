const knex = require('../database/knex')

class TagsController {
  async index(request, response) {
    const user_id = request.user.id

    const tags = await knex('tags').where({ user_id })

    return response.json(tags)
  }
}

module.exports = TagsController
