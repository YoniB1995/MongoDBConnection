const express = require('express');
// const MongoClient = require('./src/database/connect')
const mongoose = require('./src/database/schema')
const app = express();


app.get('/',(req,res)=>{
    res.send('<h1>This is main page</h1>')
})

app.listen(8000,()=>{
    console.log("Logged to localhost:8000")
})