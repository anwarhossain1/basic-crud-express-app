const {read, readAll, create, search, deleteById, deleteAll, update} = require('./db_manage')
const {validate} = require('./simple-crud.request')
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
        try {
            const validationResult = validate(req.body)
            if(!validationResult.error){
                const result = await create(req.body)
                return res.status(200).json({message:'Successfully added'})
            }
            return res.status(400).json({status:'400', message:validationResult.error})
        } catch (error) {
            console.log(error)
        }
        })

        app.post('/update/:id',async (req,res)=>{
          try {
            const validationResult = validate(req.body)
            if(!validationResult.error){
                const result = await update(req.params.id, req.body)
                console.log('rr', result)
               return  res.status(200).json({message:'Successfully Updated'})
            }
            return res.status(400).json({status:'400', message:validationResult.error})
          } catch (error) {
            console.error(error)
            return error
          }

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