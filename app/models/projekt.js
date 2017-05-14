var mongoose = require('mongoose');

module.exports = mongoose.model('Projekt', {
	headline : {type : String, default: ''},
	text : {type : String},
	url : {type : String},
	image: {type: String}

});