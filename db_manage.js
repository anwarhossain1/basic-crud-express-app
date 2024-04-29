const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27010'
const client = new MongoClient(url)
const myDB = client.db('simple-crud')
const myDBColl = myDB.collection('crud')
const data = {name:'anwar', age:'28'}


const create = async ()=>{
const result = await myDBColl.insertOne(data)
console.log('success', result)
}

const read = async ()=>{
    const result = await myDBColl.findOne({})
    console.log('success', result)
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
//create()
//read()
//deleteItem()
// update()

