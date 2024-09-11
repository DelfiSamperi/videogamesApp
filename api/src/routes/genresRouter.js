const { Router } = require('express');
const { getGenres } = require('../handlers/genresHandlers');

const genresRouter = Router();

// **📍 GET | /genres**

genresRouter.get('/', getGenres);

module.exports = genresRouter;