const { col } = require("sequelize");
const food_type = require("../../models/food_type");

exports.getFoodTypes = async(req,res)=>{
    try {
        const foodTypes = await food_type.findAll({
            attributes:{
                include:[
                    [col('food_type'),'name'],
                ]
            }
        });
        res.status(200).send(foodTypes);
    } catch (error) {
        res.status(500).send(error.message || "Couldn't Fetch Food Types");
    } 
     
}