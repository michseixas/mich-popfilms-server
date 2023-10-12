const express = require("express");
const router = express.Router();
const Top250 = require("../models/Top250.model");

router.get("/Top250Movies", (req, res, next) => {
  Top250.find({})
    .then((items) => {
      res.send({ items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve movies" });
    });
});

module.exports = router;
