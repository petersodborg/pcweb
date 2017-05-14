var mongoose = require('mongoose');

module.exports = mongoose.model('Produkt', {
	headline : {type : String, default: ''}

});