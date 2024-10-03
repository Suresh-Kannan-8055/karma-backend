const appliances = require("../../models/appliances");

exports.getAppliancesTypes = async(req,res)=>{
    try {
        const appliancesTypes = await appliances.findAll({
            // attributes:{
            //     include:[
            //         [col('food_type'),'name'],
            //     ]
            // }
        });
        res.status(200).send(appliancesTypes);
    } catch (error) {
        res.status(500).send(error.message || "Couldn't Fetch Appliances Types");
    } 
     
}