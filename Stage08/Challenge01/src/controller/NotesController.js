const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const { user_id } = request.params

    if (rating < 1 || rating > 5) {
      throw new AppError('Rating Invalid, use from 1 to 5')
    }

    const note_id = await knex('movie_notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return { note_id, user_id, name }
    })

    await knex('movie_tags').insert(tagsInsert)

    response.json()
  }
}

module.exports = NotesController
