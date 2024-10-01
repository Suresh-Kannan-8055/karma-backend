const express = require("express");
const router = express.Router();
const GetController = require("../controller/getcontroller");
const PutController = require("../controller/postcontroller");

router.get("/stepdata", GetController.StepData);
router.post("/insert", PutController.plantationform);
router.post("/carbonsurvey", PutController.CarbonSurvey);
router.post("/appliancesmultiselect", PutController.appliancemulti);

module.exports = router;
