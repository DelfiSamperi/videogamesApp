const { DataTypes } = require('sequelize');

/*
MODELO 1 | Videogames**

-  ID (deben ser distintos a los que vienen de la API). \*
-  Nombre. \*
-  Descripción. \*
-  Plataformas. \*
-  Imagen. \*
-  Fecha de lanzamiento. \*
-  Rating. \*
*/

module.exports = (sequelize) => {
    sequelize.define('Videogames', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id: {
            type: DataTypes.UUID,
            unique: true,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.REAL,
            allowNull: false,
        },
    }, { freezeTableName: true, timestamps: false });
};

//VIDEOGAMES
/*
data.results
results.name
results.platforms -> platform.name
results.released
results.background_image
results.rating
results.genres ??
*/