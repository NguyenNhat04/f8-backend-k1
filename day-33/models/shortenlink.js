'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortenLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShortenLink.init({
    fulVer: DataTypes.STRING,
    shortVer: DataTypes.STRING,
    code: DataTypes.STRING,
    views: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShortenLink',
  });
  return ShortenLink;
};