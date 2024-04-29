const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27010'
const client = new MongoClient(url)
const myDB = client.db('simple-crud')
const myDBColl = myDB.collection('crud')
const data = {name:'anwar', age:'28'}


const create = async (document)=>{
const result = await myDBColl.insertOne(document)
return result
}

const read = async ()=>{
    const result = await myDBColl.find({}).toArray();
    return result
}

const update = async ()=>{
        const filter = {age:'28'}
        const newData = {name:'ista', age:'40'}
        const result = await myDBColl.replaceOne(filter,newData )
        console.log('success', result)
}
const deleteItem = async ()=>{
    const filter = {age:'40'}
    const result = await myDBColl.deleteOne(filter)
    console.log('success', result)
}

module.exports = {create, read, deleteItem, update}
//create()
//read()
//deleteItem()
// update()

