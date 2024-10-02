const appliances = require("../../models/appliances");
const carbon_survey = require("../../models/carbon_survey");
const food_type = require("../../models/food_type");
const vehicle_fuel_type = require("../../models/vehicle_fuel_type");
const vehicle_type = require("../../models/vehicle_type");
const users = require("../../models/users");
const appliances_multiselect = require("../../models/appliances_multiselect");
const plantation_form = require("../../models/plantation_form");

const StepData = async (req, res) => {
  try {
    const VehicleTypeData = await vehicle_type.findAll();
    const VehicleFuelTypeData = await vehicle_fuel_type.findAll();
    const FoodItemsData = await food_type.findAll();
    const AppliancesData = await appliances.findAll();

    const response = [
      [
        {
          type: "card",
          select:"single",
          name:'vehicles',
          data: VehicleTypeData.map((vehicletype) => ({
            vehicle_id: vehicletype.id,
            name: vehicletype.vehicle_name,
            icon: vehicletype.titel,
            color: vehicletype.color,
            border_color: vehicletype.boder_color,
            emission_value: vehicletype.emission_value,
          })),
        },
        {
          type: "slider",
          name:'no_of_vehicles',
          data: {
            blockInterval: 2,
            start: 2,
            end: 10,
            labelText: "",
            collectionType: "vehicles",
          },
        },
        {
          type: "card",
          select:"single",
          name:"fuel_type",
          data: VehicleFuelTypeData.map((vehiclefueltype) => ({
            uel_type_id: vehiclefueltype.id,
            name: vehiclefueltype.fuel_type,
            icon: vehiclefueltype.titel,
            color: vehiclefueltype.color,
            border_color: vehiclefueltype.boder_color,
            emission_value: vehiclefueltype.emission_value,
          })),
        },
        {
          type: "slider",
          name:"distance",
          data: {
            start: 10,
            end: 250,
            labelText: "km",
            collectionType: "km",
          },
        },
      ],
      [
        {
          type: "card",
          select:"single",
          name:"food_type",
          data: FoodItemsData.map((fooditem) => ({
            food_id: fooditem.id,
            name: fooditem.food_type,
            icon: fooditem.titel,
            color: fooditem.color,
            border_color: fooditem.boder_color,
            emission_value: fooditem.emission_value,
          })),
        },
      ],
      [
        {
          type: "card",
          select:"multi",
          name:"appliances",
          data: AppliancesData.map((appliance) => ({
            appliance_id: appliance.id,
            name: appliance.name,
            icon: appliance.title,
            color: appliance.color,
            border_color: appliance.boder_color,
            emission_value: appliance.emission_value,
          })),
        },
      ],
      [
        {
          type: "slider",
          name:"power_units",
          data: {
            start: 100,
            end: 1000,
            labelText: "units",
            collectionType: "units",
          },
        },
      ],
    ];
    return res.status(200).json(response);
  } catch (err) {
    console.log("Error fetch Step Data", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { StepData };
