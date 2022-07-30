const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (resquest, response) => {
  const { name, email, password } = resquest.body

  response.json({ name, email, password })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is runnig on Port ${PORT}`))
