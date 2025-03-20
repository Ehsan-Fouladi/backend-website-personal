const express = require("express");
const router = express.Router();
const formServicesController = require("../controllers/formServicesController");

router.get("/formServices", formServicesController.getAllServicesForm);
router.get("/formServices/:id", formServicesController.getServicesFormById);
router.get("/formServices/:id", formServicesController.deleteFormServices)