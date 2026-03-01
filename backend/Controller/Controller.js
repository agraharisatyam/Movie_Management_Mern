const Movie = require("../Model/Model");


const MovieCreate = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const result = await movie.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create movie' });
    }
};

const MovieGet = async (req, res) => {

    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
};
const MovieGetById = async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch movie' });
    }
};


const MoviEdit = async (req, res) => {
    try{
        const result = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update movie' });
    }

};

const MovieDelete = async (req, res) => {
    try{
        const result = await Movie.findByIdAndDelete(req.params.id);
        if (!result) {

            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete movie' });

    }
}

module.exports = { MovieCreate, MovieGet, MoviEdit, MovieDelete ,MovieGetById};
          