var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

router.get("/movies", function (req, res) {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data });
      console.log(data);
    });
});


module.exports = router;
