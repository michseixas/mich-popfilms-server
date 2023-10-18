const express = require("express");
const router = express.Router();
const Top250 = require("../models/Top250.model");
const MostPopular = require("../models/MostPopular.model");
const Theater = require("../models/Theater.model");
const ComingSoon = require("../models/ComingSoon.model");
const MovieDetails = require("../models/MovieDetails.model")

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

router.get("/ComingSoon", (req, res, next) => {
  ComingSoon.find({})
    .then((items) => {
      res.send({ items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve coming soon movies" });
    });
});

router.get("/moviedetails/:movieId", (req, res, next) => {
  const { movieId } = req.params;
//get the movie details by the movie ID in the localIMDB database
  MovieDetails.findOne({ id: movieId })
    .then((moviedetails) => {
      res.send({ moviedetails });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve movie details" });
    });
});

module.exports = router;
