// const { MongoClient } = require("mongodb");
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

const express = require('express')
const {read, create} = require('./db_manage')
const app = express()
const port = 4000
app.use(express.json())
app.get('/', async (req, res) => {
  const document = await read()
  res.status(200).send(document)
})
app.post('/create', async  (req, res) => {
  console.log('ad', req.body)
  const document = await create(req.body)
  res.status(200).send(document)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  module.exports = app