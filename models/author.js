'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      this.hasMany(models.Article, {
        foreignKey: {
            name: 'author_id',
            field: 'author_id'
        }
    });
    }
  }

  Author.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false
  });

  return Author;
};
