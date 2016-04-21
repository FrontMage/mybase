var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	exphbs = require("express-handlebars"),
	request = require("request");

var configure = require("./configure");

var restCallback = require("./lib/rest-callback");

//initial modules
var app = express();

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

app.use(express.static(configure.static));

app.use(bodyParser.json());

//routing
app.get("/", function (req, res) {
	request("http://localhost:3000/api/articles", function (err, response, body) {
		//console.log(response);
		console.log(body);
	});
	res.render("home");
})

//restful routing
app.use("/api/articles**", restCallback.auth);

app.get("/api/articles", restCallback.getArticles);

app.get("/api/articles/:_id", restCallback.getArticleBy_id);

app.post("/api/articles", restCallback.postArticle);

app.put("/api/articles/:_id", restCallback.putArticle);

app.delete("/api/articles/:_id", restCallback.deleteArticle)

app.listen(configure.port, function () {
	console.log("Express running on port 3000"); 
});




























