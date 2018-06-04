const express = require('express');
const MovieModel = require('./movie.model');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/movies', async (req,res)=> {

    const movies = await MovieModel.find({}).exec();
    res.json(movies);
});

router.post('/movies', async(req,res) => {

   // console.log();
   const movie = req.body;
   const movieToBeCreated = MovieModel(movie);
   const createdMovie = await movieToBeCreated.save();
   res.json(createdMovie);

});

module.exports = router;