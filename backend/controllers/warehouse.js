const Warehouse = require("../models/warehouse");

const registerWarehouse = async (req,res) =>{
    if(!req.body.name || !req.body.address  || !req.body.city) 
    return res.status(401).send("Process failed: Incomplete data");

    const existingWarehouse = await Warehouse.findOne({ name : req.body.name});
    if(existingWarehouse) return res.status(401).send("Process failed: warehouse already exists");

    const warehouse = new Warehouse({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        dbStatus: true,
    });

    const result = warehouse.save();
    if(!result) return res.status(401).send("Failed to register Warehouse");
    return res.status(200).send({warehouse});
};

const listWarehouse = async(req,res) =>{
    const warehouse = await Warehouse.find();
    if(!warehouse) return res.status(401).send("No Warehouse");
    return res.status(200).send({warehouse});
 };

module.exports = { registerWarehouse , listWarehouse };