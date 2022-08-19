require('express-async-errors') //import express async errors

const express = require('express')
const AppError = require('./utils/AppError')
const routes = require('./routes')
const uploadConfig = require('./configs/upload')

const app = express()

app.use(express.json())

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    response
      .status(error.statusCode)
      .json({ status: 'error', message: error.message })
  }

  console.error(error)

  return response
    .status(500)
    .json({ status: 'error', message: 'internal server error' })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`))
