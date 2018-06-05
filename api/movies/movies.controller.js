const MovieModel = require('./movie.model');

const getAllMovies = async(req,res) => {

    const movies = await MovieModel.find({}).exec();
    res.json(movies);

};

const postMovie = async(req,res) => {

    // console.log();
    const movie = req.body;
    const movieToBeCreated = MovieModel(movie);
    const createdMovie = await movieToBeCreated.save();
    res.json(createdMovie);
 
 }

 const getMovieById = async(req,res) => {
    const {movieId} = req.params;
    const movies = await MovieModel.find({_id:movieId}).exec();
    res.json(movies);

};

 module.exports = {
    getAllMovies,
    postMovie,
    getMovieById,
 };