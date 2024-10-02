const appliances_multiselect = require("../../models/appliances_multiselect");
const carbon_survey = require("../../models/carbon_survey");
const plantation_form = require("../../models/plantation_form");

const plantationform = async (req, res) => {
  try {
    const plantationformdata = req.body;
    const plantationform = await plantation_form.bulkCreate(plantationformdata, {
      fields: [
        "survey_id",
        "name",
        "phone_number",
        "e_mail",
        "location",
        "tree_count",
        "purpose",
      ],
    });

    res.status(201).json({ id: plantationform.id });
  } catch (error) {
    console.error("Error inserting plantationform data:", error);
    res.status(500).send("Error inserting plantationform data");
  }
};
const CarbonSurvey = async (req, res) => {
  try {
    const carbonsurveydata = req.body;
    console.log("Received carbon survey data:", carbonsurveydata);
    const carbonsurvey = await carbon_survey.bulkCreate(carbonsurveydata, {
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

    res.status(201).json({id :carbonsurvey.id});
  } catch (error) {
    console.error("Error inserting carbonsurvey data:", error);
    res.status(500).send("Error inserting carbonsurvey data");
  }
};
const appliancemulti = async (req, res) => {
  try {
    const appliancemultidata = req.body;
    console.log("Received appliance multidata data:", appliancemultidata);
    const appliancesmultiselect = await appliances_multiselect.bulkCreate(appliancemultidata, {
      fields: [
        "survey_id",
        "appliances_id",
      ],
    });

    res.status(201).json(appliancesmultiselect);
  } catch (error) {
    console.error("Error inserting appliances multiselect data:", error);
    res.status(500).send("Error inserting appliances multiselect data");
  }
};

module.exports = { plantationform,CarbonSurvey,appliancemulti};
