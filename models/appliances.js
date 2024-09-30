const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const appliances = sequelize.define(
  "appliances",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emission_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    title:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    color:{
      type:DataTypes.STRING(255),
      allowNull:true,
    },
    boder_color:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  },
  {
    sequelize,
    modelName: "appliances",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = appliances;
