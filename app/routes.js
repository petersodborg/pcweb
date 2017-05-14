var Todo = require('./models/todo');
var Projekt = require('./models/projekt');
var Produkt = require('./models/produkt');

function getTodos(res){
	Todo.find(function(err, todos, next) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(todos); // return all todos in JSON format
		});
};

function getProdukter(res){
	Produkt.find(function(err, produkter, next) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(produkter); // return all todos in JSON format
		});
};

function getProjekter(res){
	Projekt.find(function(err, projekter, next){
		if(err)
			res.send(err);

		res.json(projekter);
	});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

		app.get('/api/produkter', function(req, res) {

		// use mongoose to get all todos in the database
		getProdukter(res);
	});


	// createtodo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create atodo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});


	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});
	

		app.get('/api/projekter', function(req, res){

		getProjekter(res);

	});

		app.post('/api/projekter', function(req, res) {

		// create atodo, information comes from AJAX request from Angular
		Projekt.create({
			headline : req.body.headline,
			text : req.body.text,
			url : req.body.url,
			image : req.body.image,
			done : false
		}, function(err, projekter) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getProjekter(res);
		});

	});


	

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};