const { hash, compare } = require('bcryptjs')

const AppError = require('../utils/AppError')

const knex = require('../database/knex')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const checkUserExists = await knex('users').where({ email }).first()

    if (checkUserExists) {
      throw new AppError('User already exists')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    })

    return response.status(201).json({ message: 'User created' })
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const user = await knex('users').where({ id }).first()

    if (!user) {
      throw new AppError('User not found')
    }

    const userWhitThisEmail = await knex('users').where({ email }).first()

    if (userWhitThisEmail && userWhitThisEmail.id !== user.id) {
      throw new AppError('Email already exists')
    }

    if (password && !old_password) {
      throw new AppError('Old password not defined')
    }

    if (old_password && password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError('Passwords do not match')
      }

      user.password = await hash(password, 8)
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    await knex('users')
      .update({
        name: user.name,
        email: user.email,
        password: user.password
      })
      .where({ id })

    return response.json()
  }
}

module.exports = UsersController
