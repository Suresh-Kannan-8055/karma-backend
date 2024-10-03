const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const vehicle_type = sequelize.define(
  "vehicle_types",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicle_name: { 
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    titel:{
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
    modelName: "vehicle_types",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = vehicle_type;
