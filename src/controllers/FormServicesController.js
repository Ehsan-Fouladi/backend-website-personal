const FormService = require("../models/FormService");

exports.getAllServicesForm = async (req, res) => {
  try {
    const formServices = await FormService.findAll();
    res.status(200).json(formServices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching FormServices", error });
  }
};

exports.getServicesFormById = async (req, res) => {
  try {
    const formServices = await FormService.findByPk(req.params.id);
    if (!formServices) {
      return req.status(404).json({ message: "Message User Not Found" });
    }
    req.status(200).json(formServices);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching FormServices", error });
  }
};

exports.deleteFormServices = async (req, res) => {
  try {
    const formServices = await formServices.findByPk(req.params.id);
    if (!formServices) {
      return res.status(404).json({ message: "Message User Not Found" });
    }
    await formServices.destroy();
    res.status(200).json({ message: "FormServices deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting FormServices", error });
  }
};
