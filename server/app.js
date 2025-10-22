// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const topSpotsData = require('./data.json');



// create your express server below
const app = express();




// add your routes and middleware below
app.get('/', (req, res) => {res.status(200).send('New Express Server');});

app.get('/data', (req, res) => {res.send(topSpotsData);});

app.use(morgan('dev'));



// finally export the express application
module.exports = app;
