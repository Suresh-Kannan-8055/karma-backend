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
  
  try {
    const carbonsurveydata =req.body;

    const data = [
    carbonsurveydata
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

    const appliancesAddData = carbonsurveydata.appliances.map((appliance_id) => ({
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
