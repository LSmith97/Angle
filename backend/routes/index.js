const express = require("express");
const router = express.Router();

// Index Page
router.get("/", function (req, res, next) {
  res.redirect("/posts");
});

module.exports = router;
