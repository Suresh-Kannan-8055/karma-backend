const appliances = require("./appliances");
const carbon_survey = require("./carbon_survey");
const food_type = require("./food_type");
const vehicle_fuel_type = require("./vehicle_fuel_type");
const vehicle_type = require("./vehicle_type");
const users = require("./users");
const appliances_multiselect = require("./appliances_multiselect");
const plantation_form = require("./plantation_form");

users.hasMany(carbon_survey, { foreignKey: "user_id", as: "carbon_survey",});
carbon_survey.belongsTo(users, { foreignKey: "user_id", as: "users",});

vehicle_type.hasMany(carbon_survey, { foreignKey: "vehicle_id", as: "carbon_survey",});
carbon_survey.belongsTo(vehicle_type, { foreignKey: "vehicle_id", as: "vehicle_type",});

vehicle_fuel_type.hasMany(carbon_survey, { foreignKey: "vehicle_fuel_id", as: "carbon_survey",});
carbon_survey.belongsTo(vehicle_fuel_type, { foreignKey: "vehicle_fuel_id", as: "vehicle_fuel",});

food_type.hasMany(carbon_survey, { foreignKey: "food_id", as: "carbon_survey",});
carbon_survey.belongsTo(food_type, { foreignKey: "food_id", as: "food_type",});

carbon_survey.hasMany(appliances_multiselect, { foreignKey: "survey_id", as: "appliances_multiselect",});
appliances_multiselect.belongsTo(carbon_survey, { foreignKey: "survey_id", as: "survey",});

appliances.hasMany(appliances_multiselect, { foreignKey: "appliances_id", as: "appliances_multiselect",});
appliances_multiselect.belongsTo(appliances, { foreignKey: "appliances_id", as: "appliances",});

carbon_survey.hasOne(plantation_form, { foreignKey: "survey_id", as: "plantation_form",});
plantation_form.belongsTo(carbon_survey, { foreignKey: "survey_id", as: "survey",});

module.exports ={carbon_survey,food_type,vehicle_fuel_type,appliances,vehicle_type,users,appliances_multiselect,plantation_form};