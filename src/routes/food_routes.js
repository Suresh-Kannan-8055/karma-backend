const express = require("express");
const router = express.Router();
const foodController = require('../controller/food_controller')

router.get('/foodTypes',foodController.getFoodTypes);

module.exports = router;