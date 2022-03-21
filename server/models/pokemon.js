const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Pokemon = (sequelize) => {
  const pokemon = sequelize.define('Pokemon', Attributes,
  { timestamps: false,
  tableName: 'Pokemon' });
;

  return pokemon;
};

module.exports = Pokemon;
