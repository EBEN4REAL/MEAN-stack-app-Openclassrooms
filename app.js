const express = require('express');

const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Routes
const recipeRoutes = require("./routes/recipe");



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Eben:mycountry@cluster0-lbjpo.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log("Successfully connected to MongoDB");
    }).catch(error => {
        console.log(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/recipes', recipeRoutes);

module.exports = app;

