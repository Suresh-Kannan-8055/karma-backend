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

    res.status(201).json(plantationform);
  } catch (error) {
    console.error("Error inserting cart items:", error);
    res.status(500).send("Error inserting cart items");
  }
};

module.exports = { plantationform };
