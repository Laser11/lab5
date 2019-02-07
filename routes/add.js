var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var newdata = { name : request.query.name,
	description : request.query.description,
	imageURL :"http://lorempixel.com/400/400/people"
	}
	
	
	data.friends.push(newdata);

	response.render('index',data);
 }