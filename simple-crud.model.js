const getDBCollection =  (db)=>{
    const myCollection =  db.collection('crud', {
        validator:{
            $jsonSchema:{
                bsonType:"object",
                required:["name", "age"],
                properties:{
                    name:{bsonType:"int", description:"must be an integer and is required"},
                    age:{bsonType:"string", description:"must be a string and is required"}
                },
              
            }
        }
    })

    return myCollection
}

module.exports = {getDBCollection}