const getDBCollection =  (db)=>{
    // Define index creation function
    const createIndex = async (collection) => {
        try {
            // Create index on 'name' field
            await collection.createIndex({ name: 1 });
            console.log("Index on 'name' field created successfully.");

            // Create index on 'age' field
            await collection.createIndex({ age: 1 });
            console.log("Index on 'age' field created successfully.");
        } catch (error) {
            console.error("Error creating indexes:", error);
        }
    };

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
        },
    })
      // Define index creation function
      

    // Call index creation function
    createIndex(myCollection);
    

    return myCollection
}

module.exports = {getDBCollection}