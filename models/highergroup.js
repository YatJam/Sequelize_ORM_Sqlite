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
    static associate({ MainGroup }) {
      // define association here
      this.hasMany(MainGroup, {foreignKey: 'higherGroupId', as: 'mainGroup'})
    }
    toJSON(){
      return { ...this.get(), id:undefined }
    }
  }
  HigherGroup.init({
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
    freezeTableName: true,
    tableName: 'HigherGroup',
    modelName: 'HigherGroup',
  }
  );
  return HigherGroup;
};