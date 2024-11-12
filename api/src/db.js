const { Sequelize } = require('sequelize');
require('dotenv').config();
const VideogamesModel = require('./models/Videogames');
const GenresModel = require('./models/Genres');

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
        logging: false,
        native: false,
    }
);

VideogamesModel(sequelize);
GenresModel(sequelize);

const { Videogames, Genres } = sequelize.models;

//relacion muchos a muchos
Videogames.belongsToMany(Genres, {through: 'Videogames_Genres', timestamps: false });
Genres.belongsToMany(Videogames, {through: 'Videogames_Genres', timestamps: false });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};