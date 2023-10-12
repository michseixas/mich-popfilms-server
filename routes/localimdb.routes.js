const express = require("express");
const router = express.Router();
const Top250 = require("../models/Top250.model");
const MostPopular = require("../models/MostPopular.model");
const Theater = require("../models/Theater.model");

router.get("/Top250Movies", (req, res, next) => {
  Top250.find({})
    .then((items) => {
      res.send({ items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve top 250 movies" });
    });
});

router.get("/MostPopularMovies", (req, res, next) => {
  MostPopular.find({})
    .then((items) => {
      res.send({ items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve most popular movies" });
    });
});

router.get("/InTheaters", (req, res, next) => {
  Theater.find({})
    .then((items) => {
      res.send({ items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve in theaters movies" });
    });
});

module.exports = router;
