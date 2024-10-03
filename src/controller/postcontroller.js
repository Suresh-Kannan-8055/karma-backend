const appliances_multiselect = require("../../models/appliances_multiselect");
const carbon_survey = require("../../models/carbon_survey");
const plantation_form = require("../../models/plantation_form");

const plantationform = async (req, res) => {
  try {
    const plantationformdata = req.body;
    const plantationform = await plantation_form.bulkCreate(
      plantationformdata,
      {
        fields: [
          "survey_id",
          "name",
          "phone_number",
          "e_mail",
          "location",
          "tree_count",
          "purpose",
        ],
      }
    );

    res.status(201).json({ id: plantationform.id });
  } catch (error) {
    console.error("Error inserting plantationform data:", error);
    res.status(500).send("Error inserting plantationform data");
  }
};

const CarbonSurvey = async (req, res) => {
  let vehicle_id = null;
  let vehicle_count = 0;
  let vehicle_fuel_id = null;
  let distance_per_week = 0;
  let appliances = null;
  let food_id = null;
  let electricity_units = 0;
  let carbon_footprint = 0;

  try {
    const carbonsurveydata =req.body;

    carbonsurveydata.forEach((data) => {
      switch (data.name) {
        case "vehicle":
          vehicle_id = data.selection[2][0];
          vehicle_count = data.selection[0];
          vehicle_fuel_id = data.selection[2][1];
          distance_per_week = data.selection[1];
          break;
        case "food":
          food_id = data.selection[0][0];
          break;
        case "power_units":
          electricity_units = data.selection[0];
          break;
        case "appliances":
          appliances = data.selection[0];
          break;
        case "carbon_footprint":
          carbon_footprint = data.selection[0];
        default:
          break;
      }
    });

    const data = [
      {
        user_id: 1,
        vehicle_id: vehicle_id,
        vehicles_count: vehicle_count,
        vehicle_fuel_id: vehicle_fuel_id,
        distance_per_week: distance_per_week,
        food_id: food_id,
        electricity_units: electricity_units,
        carbon_footprint: carbon_footprint,
      },
    ];

    console.log("Received carbon survey data:", data);

    const carbonsurvey = await carbon_survey.bulkCreate(data, {
      fields: [
        "user_id",
        "vehicle_id",
        "vehicles_count",
        "vehicle_fuel_id",
        "distance_per_week",
        "food_id",
        "electricity_units",
        "carbon_footprint",
      ],
    });

    const surveyId = carbonsurvey[0].id;

    console.log("Inserted survey ID:", surveyId);

    const appliancesAddData = appliances.map((appliance_id) => ({
      survey_id: surveyId,
      appliances_id: appliance_id,
    }));

    console.log(appliancesAddData);

    const appliancesmultiselect = await appliances_multiselect.bulkCreate(
      appliancesAddData,
      {
        fields: ["survey_id", "appliances_id"],
      }
    );

    res.status(201).json("success");
  } catch (error) {
    console.error("Error inserting carbonsurvey data:", error);
    res.status(500).send("Error inserting carbonsurvey data");
  }
};

module.exports = { plantationform, CarbonSurvey };
