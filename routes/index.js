var express = require("express");
var router = express.Router();
var rg = require("random-greetings");
var moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Travel Experts INC.",
    greeting: rg.greet(),
    date: moment().format("dddd, MMMM Do YYYY"),
    time: moment().format("h:mm:ss a"),
  });
});

/* GET thankyou page page. */
router.get("/thankyou", function (req, res, next) {
  console.log(
    "Thank you for registering with us. We aim to respond to you as soon as possible."
  );
  res.render("thankyou");
});
module.exports = router;
