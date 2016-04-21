var mongoose = require("mongoose");

var configure = require("./../configure");

mongoose.connect(configure.db);

var Schema = mongoose.Schema;

//article model
var articleSchema = new Schema(configure.articleSchema);
exports.article = mongoose.model("article", articleSchema);

//auth model
var authSchema = new Schema(configure.authSchema);
exports.auth = mongoose.model("auth", authSchema);