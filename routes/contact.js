var express = require("express");
var router = express.Router();
const Post = require("../models/contact").Post;

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Travel Experts INC." });
// });

//To create a new contact
// router.post("/create", function (req, res, next) {
//   // const post = new Post(req.body);
//   const contact = new Post();
//   contact.fname = req.body.fname;
//   contact.lname = req.body.lname;
//   contact.mail = req.body.mail;
//   contact.comment = req.body.comment;
//   contact.save((err) => {
//     // if(err) throw err;
//     if (err) {
//       const errorArray = [];
//       const errorKeys = Object.keys(err.errors);
//       errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
//       return res.render("contact", {
//         errors: errorArray,
//       });
//     }
//     res.redirect("/contact");
//   });
// });
module.exports = router;
