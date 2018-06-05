const express = require('express');
const MovieController = require('./movies.controller');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/movies', MovieController.getAllMovies);

router.post('/movies', MovieController.postMovie);

router.get('/movie/:movieId', MovieController.getMovieById);

module.exports = router;