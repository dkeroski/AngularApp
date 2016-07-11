var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User');
var jwt = require('./services/jwt.js');
//connect to mongo db
var url = 'mongodb://localhost/myDB';
mongoose.connect(url, function(err) {
    if (err) console.log(err);
    console.log('Database is connected');
});

var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
})


app.post('/register', function(req, res) {
    var user = req.body;

    var newUser = new User();

    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    var payload = {
        creted: req.hostname,
        subject: user.id
    }
    var token = jwt.encode(payload, 'hello...');
    newUser.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({
                user: newUser.toJSON(),
                token: token
            });
        }
    });
});

var server = app.listen(3000, function() {
    console.log('app listen on ', server.address().port);
});