const express = require("express");
const router = express.Router();
const appliancesController = require('../controller/appliances_controller')

router.get('/appliancesTypes',appliancesController.getAppliancesTypes);

module.exports = router;