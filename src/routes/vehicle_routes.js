const express = require("express");
const router = express.Router();
const vehicleController = require('../controller/vehicle_controller');

router.get('/vehicleTypes',vehicleController.getVehicleType);
router.get('/fueltypes',vehicleController.getfuelType);
router.get('/fueltypes/:id',vehicleController.getfuelTypeById);
module.exports= router;