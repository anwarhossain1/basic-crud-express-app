const express = require('express')
const setupRoutes = require('./simple-crud.controller')
const app = express()
const port = 4000
app.use(express.json())
app.listen(port, () => {
    setupRoutes(app)
    console.log(`Example app listening on port ${port}`)
  })
module.exports = app