'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HigherGroup extends Model {
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
  HigherGroup.init({
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
        notNull: { msg: 'Higher Group must be specified'},
        notEmpty: { msg: 'Higher Group name must not be empty'},
      }
    }
  }, {
    sequelize,
    tableName: 'HigherGroup',
    modelName: 'HigherGroup',
  }
  );
  return HigherGroup;
};