const vehicle_fuel_type = require("../../models/vehicle_fuel_type");
const vehicle_type = require("../../models/vehicle_type");
const vehicle_emmision = require("../../models/vehicle_emmision");
const { col, literal } = require("sequelize");

exports.getVehicleType = async(req,res)=>{
    try {
        const vehicleTypes =await vehicle_type.findAll({
            attributes:{
                include:[
                    [col('vehicle_name'),'name'],
                ]
            }
        });
        res.status(200).send(vehicleTypes);
    } catch (error) {
        res.status(500).send(error||"Couldn't Fetch Vehicle Types");
    }
   
}

exports.getfuelType = async(req,res)=>{
    try {
        const fuelTypes =await vehicle_fuel_type.findAll();
        res.status(200).send(fuelTypes);
    } catch (error) {
        res.status(500).send(error||"Couldn't Fetch Vehicle Types");
    }
}

exports.getfuelTypeById = async(req,res)=>{
    const vehicleType = req.params.id
    try {
        const fuelTypes =await vehicle_fuel_type.findAll({
            attributes:{
               include:[
                [col('fuel_type'),'name']
               ]
            },
            include:{
                model:vehicle_emmision,
                where:{
                    vehicle_type_id:vehicleType
                }
            }
        });
        res.status(200).send(fuelTypes);
    } catch (error) {
        res.status(500).send(error||"Couldn't Fetch Vehicle Types");
    }
}