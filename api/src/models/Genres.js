const { DataTypes } = require('sequelize');
/*
**📍 MODELO 2 | Genres**

-  ID. \*
-  Nombre. \*
*/

module.exports = (sequelize) => {
    sequelize.define('Genres', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }, 
    }, { freezeTableName: true, timestamps: false })
};
