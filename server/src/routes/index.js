var express = require("express");
var router = express.Router();

var commonController = require("../controllers/common");

router.get("/", (req, res) => {
    res.render("index", {
      title: "API",
      message: "specify request uri to access other api's"
    });
  });

router.get("/getTopHeadlines", commonController.getTopHeadlines)

router.all("*", (req, res) => {
    res.status(404).send("API not found");
});

module.exports = router;