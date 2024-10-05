const axios = require('axios');
const { Genres } = require('../db');

const { API_KEY } = process.env;
const API_GENRES = `https://api.rawg.io/api/genres?key=${API_KEY}`;

/* GET GENRES
-  Obtiene un arreglo con todos los géneros existentes de la API.
-  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos 
los géneros que encuentres en la API.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de 
obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo 
desde allí.
*/

const getGenrestoDB = async () => {
    const genresDB = await Genres.findAll();
    if(!genresDB.length) {
        const genresFromApi = (await axios.get(API_GENRES)).data;
        
        const genresApi = genresFromApi.results.map(
            (g) => ({
                name: g.name,
            })
        );
        await Genres.bulkCreate(genresApi);
        const genresDB = await Genres.findAll();
        
        console.log('base de datos con genres ya creados');
        return genresDB;
    } else {
        genresDB.forEach( genres => {
            console.log(genres.dataValues);
        });
        console.log('La base de datos de generos ya estaba cargada (al poner {alter:true} en index.js la funcion getGenresToDB entra en el else!!');
    };
};

module.exports = {
    getGenrestoDB
}