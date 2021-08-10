const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    dbStatus: Boolean,
});

const warehouse = mongoose.model("warehouse" , warehouseSchema);
module.exports = warehouse