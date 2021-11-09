const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import routes
const bookRoute= require('./routes/books');
app.use('/books',bookRoute);

//Routes//listening
mongoose.connect("mongodb://localhost:27017/myparvathydb",()=>{
    console.log("Connected to DB");
});

app.listen(8080);