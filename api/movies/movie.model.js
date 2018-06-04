const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: String,
    posterPath: String,
    comment: String,
    releaseDate: String,
});

module.exports = mongoose.model('movie',MovieSchema);