const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27010'
const client = new MongoClient(url)
const myDB = client.db('simple-crud')
const myDBColl = myDB.collection('crud')
const data = {name:'anwar', age:'28'}
const {ObjectId} = require('mongodb')

const create = async (document)=>{
const result = await myDBColl.insertOne(document)
return result
}

const readAll = async ()=>{
    const result = await myDBColl.find({}).toArray();
    return result
}
const read = async (id)=>{
    const result = await myDBColl.find({_id:new ObjectId(id)}).toArray();
    return result
}
const search = async (document)=>{
    const result = await myDBColl.find(document).toArray();
    return result
}

const update = async ()=>{
        const filter = {age:'28'}
        const newData = {name:'ista', age:'40'}
        const result = await myDBColl.replaceOne(filter,newData )
        console.log('success', result)
}
const deleteById = async (id)=>{
    const filter = {_id: new ObjectId(id)}
    const result = await myDBColl.deleteOne(filter)
    return result
}

module.exports = {create,search, read, readAll, deleteById, update}
//create()
//read()
//deleteItem()
// update()

