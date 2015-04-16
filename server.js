var express = require('express'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.query());


mongoose.connect("mongodb://localhost/devlopment");

var Resource = app.resource = restful.model('resource', mongoose.Schema({
    id: 'number',
    name: 'string'
}))
    .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/api/data/dashboard');

app.listen(3000);
