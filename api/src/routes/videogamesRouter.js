const { Router } = require('express');
const { 
    getAllVideogames,
    getVideogamesName,
    getVideogamesId,
    postVideogame
    } = require('../handlers/videogamesHandlers');

const videogamesRouter = Router();

/* GET | /videogames

 Obtiene un arreglo de objetos, donde cada objeto es un videojuego
 con su información.
*/

videogamesRouter.get('/', getAllVideogames);

//GET | /videogames/:idVideogame**

videogamesRouter.get('/:id', getVideogamesId);


//GET | /videogames/name?="..."

videogamesRouter.get('/?name', getVideogamesName);

// POST | /videogames

videogamesRouter.post('/', postVideogame);

module.exports = videogamesRouter;