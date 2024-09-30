const express = require("express");
const router = express.Router();
const GetController = require("../controller/getcontroller");
const PutController = require("../controller/postcontroller");

router.get("/stepdata", GetController.StepData);
router.post("/insert",PutController.plantationform)


module.exports = router;
