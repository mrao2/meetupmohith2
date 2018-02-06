'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/users');
var session = require('express-session')


//and create our instances
var app = express();
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://meetupapp:pass@ds117868.mlab.com:17868/meetup-react');
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/users')
 //retrieve all users from the database
 .get(function(req, res) {
 //looks at our User Schema
 User.find(function(err, users) {
 if (err)
 res.send(err);
 //responds with a json object of our database comments.
 res.json(users)
 });
 })
 //post new user to the database
 .post(function(req, res) {

 var user = new User();
 //body parser lets us use the req.body
 user.firstName = req.body.firstName;
 user.userName = req.body.userName;
 user.password = req.body.password;
 user.apiKey = req.body.apiKey;

user.save(function(err) {
 if (err){
 res.send(err);}
 console.log(user);

 //res.json({ message: 'User successfully added!' });
 });
 });


router.route('/login')
	.post((req, res, next) => {
		  if (!req.session.userId) {
		    req.session.userId = {}
		  }
		if (req.body.userName && req.body.password) {
			console.log(`API - username: ${req.body.userName} - password: ${req.body.password}`)
			User.authenticate(req.body.userName, req.body.password, (error, user) => {
		      if (error || !user) {
		        var err = new Error('Wrong username or password.');
		        err.status = 401;
		        return next(err)
		      } else {
		      	console.log("Login success!")
		        req.session.userId = user._id;
		        res.status(200).send("Logged in!");
		      }
		    });
		  } else {
		    var err = new Error('All fields required.');
		    err.status = 400;
		    return next(err);
		  }
	})


//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
