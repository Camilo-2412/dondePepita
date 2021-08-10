const express = require("express");
const router = express.Router();
const WarehouseController = require("../controllers/warehouse");

router.post("/registerWarehouse" ,WarehouseController.registerWarehouse);
router.get("/listWarehouse" , WarehouseController.listWarehouse);

module.exports = router;