const { getGenrestoDB } = require('../controllers/genresControllers');

const getGenres = async (req,res) => {
    try {
        const genresToDB = await getGenrestoDB();
        res.status(200).json(genresToDB);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getGenres } ;