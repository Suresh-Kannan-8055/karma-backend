const express = require("express");
const dotenv = require("dotenv").config();
require("./config");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/index");
const {
  carbon_survey,
  food_type,
  vehicle_fuel_type,
  appliances,
  vehicle_type,
  users,
  appliances_multiselect,
  plantation_form,
} = require("./models/associations");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Karma Calculator");
});

const router = require("./src/routes/router");
app.use("/api", router);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server Running in port ${PORT}`);
});

sequelize.sync();
