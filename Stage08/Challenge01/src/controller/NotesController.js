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

  async show(request, response) {
    const { id } = request.params

    const note = await knex('movie_notes').where({ id }).first()
    const tags = await knex('movie_tags').where({ note_id: id }).orderBy('name')

    return response.json({
      ...note,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('movie_notes').where({ id }).delete()

    return response.json({ message: 'Note delete completed' })
  }

  async index(request, response) {
    const { title, user_id, tags } = request.query
    const notes = await knex('movie_notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title')

    if (notes.length === 0) {
      throw new AppError(`Movie notes not found`)
    }

    return response.json(notes)
  }
}
module.exports = NotesController
