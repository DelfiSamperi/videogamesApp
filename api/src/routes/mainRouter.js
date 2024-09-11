const {Router} = require('express');
const genresRouter = require('./genresRouter');
const videogamesRouter = require('./videogamesRouter');

const mainRouter = Router();

mainRouter.use('/videogames', videogamesRouter);
mainRouter.use('/genres', genresRouter);



module.exports = mainRouter;
