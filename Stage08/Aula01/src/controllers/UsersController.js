class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.json({ name, email })
  }
}

module.exports = UsersController
