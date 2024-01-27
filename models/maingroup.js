'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MainGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return { ...this.get(), id:undefined }
    }
  }
  MainGroup.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Main Group must be specified'},
        notEmpty: { msg: 'Main Group name must not be empty'},
      }
    }
  }, {
    sequelize,
    tableName: 'MainGroup',
    modelName: 'MainGroup',
  });
  return MainGroup;
};