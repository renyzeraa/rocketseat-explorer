const { response } = require('express')
const express = require('express')

const app = express()

app.get('/message/:id/:user', (resquest, response) => {
  const { id, user } = resquest.params
  response.send(`Id da mensagem:${id}, para o usuario ${user} `)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is runnig on Port ${PORT}`))
