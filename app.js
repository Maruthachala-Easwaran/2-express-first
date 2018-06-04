const express = require('express');
const mongoose = require('mongoose');
const movieRoute = require('./api/movies/movies.router');

mongoose.connect('mongodb://localhost');

const app = express();

app.get('/ping', (req, res) => {
  res.send('pongipong');
});

app.get('/', (req, res) => {
  res.send('Hi Buddy, its me');
});

app.use(movieRoute);

module.exports = app;
