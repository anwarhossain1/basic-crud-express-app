const {read, readAll, create, search, deleteById, deleteAll} = require('./db_manage')
const setupRoutes = (app)=>{
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
      app.get('/delete-all', async  (req, res) => {
            const document = await deleteAll()
            res.status(200).send(document)
            })
      app.post('/delete/:id', async  (req, res) => {
            const document = await deleteById(req.params.id)
            res.send('successfully deleted')
            })
}

module.exports = setupRoutes