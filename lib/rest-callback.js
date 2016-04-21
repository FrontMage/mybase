var models = require("./models");

module.exports = {
	getArticles : function (req, res) {
		models.article.find({}, "title content", function (err, docs) {
			if (err) {
				console.log(err);
			} else {
				res.json(docs);
			} 
		});
	},

	getArticleBy_id : function (req, res) {
		models.article.findOne({_id : req.params._id}, "-_id title content", function (err, docs) {
			if (err) {
				console.log(err);
			} else {
				res.json(docs);
			}
		});
	},

	postArticle : function (req, res) {
		var articleInstance = new models.article({
			title : req.body.title,
			content : req.body.content
		});

		articleInstance.save(function (err) {
			if (err) {
				console.log(err);
			} else {
				res.send("An article has been successfully inserted!");
			}
		});
	},

	putArticle : function (req, res) {
		models.article.findByIdAndUpdate(req.params._id, { $set : {title : req.body.title, content : req.body.content} }, 
			function(err, article){
				if (err) {
					console.log(err);
				} else {
					res.json(article);
				}
			});
	},

	deleteArticle : function (req, res) {
		models.article.findOneAndRemove({_id : req.params._id}, function(err, article){
			res.json({
				message: "Successfully deleted an article",
				article: article
			});
		});
	},

	auth : function (req, res, next) {
		try {
			if (req.method == "GET") throw "Method GET"

			if (!req.body.token) throw "Authorization denied, lack of token";

			models.auth.findOne({token : req.body.token}, "-_id username token", function (err, docs) {
				if (err) throw err;
				if (!docs) {
					res.send("Authorization denied, can't find token");
				} else {
					next();
				}
			});
		} catch(err) {
			if (typeof(err) == "string") {
				if (err == "Method GET") {
					next();
				} else {
					res.send(err);
				}
			} else {
				console.log(err);
			}
		}	
	}
};