const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'


MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    const dbo = db.db("mongoPractice")
    dbo.createCollection("customers",(err,res)=>{
        if (err) throw err;
        console.log('Collection Created');
        db.close();
    })
})

module.exports = MongoClient 

// mongodb.connect('',{useNewUrlParser: true})



//  // Set up the connection to the local db
// const mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

//   // Open the connection to the server
//   mongoclient.open((err, mongoclient) => {

//     // Get the first db and do an update document on it
//     const db = mongoclient.db("integration_tests");
//     db.collection('mongoclient_test').create({name:"This is TEST"})

//       // Get another db and do an update document on it
//     //   const db2 = mongoclient.db("integration_tests2");
//     //   db2.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
//     //     assert.equal(null, err);
//     //     assert.equal(1, result);

//         // Close the connection
//         mongoclient.close();
//       });
    
