const express = require("express")
const routes = express.Router(); 

const ProductController = require('./controllers/ProductControllers');

//routes
routes.get("/products", ProductController.index);

module.exports = routes; 
