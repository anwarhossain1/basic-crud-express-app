const {MongoClient} = require('mongodb')
const {getDBCollection} = require('./simple-crud.model')
const url = 'mongodb://localhost:27010'
const client = new MongoClient(url)
const myDB = client.db('simple-crud')
// const getDBCollection = myDB.collection('crud')
const data = {name:'anwar', age:'28'}
const {ObjectId} = require('mongodb')

const create = async (document)=>{
const result = await getDBCollection(myDB).insertOne(document)
return result
}

const readAll = async ()=>{
    const result = await getDBCollection(myDB).find({}).toArray();
    return result
}
const read = async (id)=>{
    const result = await getDBCollection(myDB).find({_id:new ObjectId(id)}).toArray();
    return result
}
const search = async (document)=>{
    const result = await getDBCollection(myDB).find(document).toArray();
    return result
}

const update = async (id, document)=>{
        const result = await getDBCollection(myDB).replaceOne({_id: new ObjectId(id)},document )
        return result
}
const deleteById = async (id)=>{
    const filter = {_id: new ObjectId(id)}
    const result = await getDBCollection(myDB).deleteOne(filter)
    return result
}
const deleteAll = async ()=>{
    const result = await getDBCollection(myDB).deleteMany({})
    return result
}

module.exports = {create,search, read, readAll, deleteById, update, deleteAll}


