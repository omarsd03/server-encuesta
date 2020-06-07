const express = require("express");
const router = express.Router();

const employee = require('../controllers/encuesta.controllers');

router.get("/", (req, res) => {
  res.json({
    status: "API Works!",
  });
});

module.exports = router;