module.exports = {

	db : "mongodb://localhost/mybase",

	static : __dirname+"/public",

	port : "3000",

	articleSchema : {
		title : String,
		content : String
	},

	authSchema : {
		username : String,
		token : String
	}
};