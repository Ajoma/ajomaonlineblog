// // Require the mongoose module
// var mongoose = require("mongoose");
// // Set up a mongoose connection
// // var mongoDB = 'mongodb://localhost:27017/blog';

// mongoose.connect(process.env.MONGO_URL || mongoDBurl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// // Get the connection
// var db = mongoose.connection;
// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// db.once("open", function () {
//   console.log("we're connected!");
// });

// const uniqueValidator = require("mongoose-unique-validator");

// const postSchema = new mongoose.Schema({
//   fname: {
//     type: String,
//     required: "Please enter enter your first name.",
//     trim: true,
//     unique: "The title must be unique.",
//   },
//   lname: {
//     type: String,
//     required: "Please enter your last name.",
//     trim: true,
//     validate: {
//       validator: function (v) {
//         return v.length > 10;
//       },
//       message: (props) => `${props.value} is body is too short.`,
//     },
//   },
//   mail: {
//     type: String,
//     trim: true,
//     validate: {
//       validator: function (v) {
//         return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
//       },
//       message: (props) => `${props.value} is not a valid URL slug.`,
//     },
//     required: "Please enter your email.",
//   },
//   comment: {
//     type: String,
//     trim: true,
//     validate: {
//       validator: function (v) {
//         return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
//       },
//       message: (props) => `${props.value} is not a valid URL slug.`,
//     },
//     required: "Please enter the post url slug",
//   },
//   // more fields defined below
// });

// postSchema.plugin(uniqueValidator);

// module.exports.Post = mongoose.model("Post", postSchema);
