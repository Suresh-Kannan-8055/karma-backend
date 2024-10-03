const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const food_type = sequelize.define(
  "food_types",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    food_type: {
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
    border_color:{
      type:DataTypes.STRING,
      allowNull:true,
    }
  },
  {
    sequelize,
    modelName: "food_types",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = food_type;
