// const { MongoClient } = require("mongodb");
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

const express = require('express')
const {read, readAll, create, search} = require('./db_manage')
const app = express()
const port = 4000
app.use(express.json())
app.get('/', async (req, res) => {
  const document = await readAll()
  res.status(200).send(document)
})
app.get('/read/:id', async (req, res) => {
  const document = await read(req.params.id)
  res.status(200).send(document)
})
app.post('/create', async  (req, res) => {
  const document = await create(req.body)
  res.status(200).send(document)
  })
  app.post('/search', async  (req, res) => {
    const document = await search(req.body)
    res.status(200).send(document)
    })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  module.exports = app