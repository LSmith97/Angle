const express = require("express");
const router = express.Router();

// Index Page
router.get("/", function (req, res, next) {
  res.redirect("/posts");
});

// About page
router.get("/about", function (req, res) {
  res.render("about", { title: "About Angle" });
});

module.exports = router;
