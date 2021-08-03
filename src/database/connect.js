const {ObjectId,MongoClient} =require('mongodb')
// const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'


MongoClient.connect(url,(err,db)=>{
    if (err) throw err;
    const dbo = db.db("mongoPractice")

//======================== createCollection ==================================/

    // dbo.createCollection("customers",(err,res)=>{
    //     if (err) throw err;
    //     console.log('Collection Created');
    //     db.close();
    // })
//======================== find One / All ==================================/

    // dbo.collection("animals").find({age:{$gt:20}}).toArray((err, result) => {
    // if (err) throw err;
    // console.log(result);
    // db.close();})
    
//======================== INSERT ONE ==================================/
//     const myobj = { name: "Company Inc", age: 26 };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   })

//======================== delete One ==================================/
// const myQuery = {_id:"6108e5b7461bb64f58436b7d"};
//   dbo.collection("animals").deleteOne(myQuery, (err, res)=> {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   })

  //======================== Update One ==================================/
//   const myQuery = {name:"yosef"}
// const newupdateQuery = {$set:{name:"aschalin"}};
//   dbo.collection("animals").updateOne(myQuery,newupdateQuery, (err, res)=> {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   })
 //======================== Order By ==================================/
//   const queryOrderBy = {name:1}
//   dbo.collection("animals").find().sort(queryOrderBy).toArray( (err, res)=> {
//     if (err) throw err;
//     console.log("All Documents are ordered");
//     console.log(res)
//     db.close();
//   })

 //======================== Order By ==================================/

//  /   const queryOrderBy = {name:1}
  dbo.collection("animals").estimatedDocumentCount(((err, res)=> {
    if (err) throw err;
    console.log(res)
    
    
    db.close();
  })
)});


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
    
