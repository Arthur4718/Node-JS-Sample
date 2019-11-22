const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//App init
const app = express(); 

//Init database. 
mongoose.connect("mongodb://localhost:27017/nodeapi", {
      useNewUrlParser : true, 
      useUnifiedTopology: true
    });

requireDir("./src/models");

//routes
app.use('/api', require('./src/routes')); 


app.listen(3001);