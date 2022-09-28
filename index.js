const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var port = process.env.PORT || 4090;
var ApiRouter = require('./v1/route');

app.use('/v1', ApiRouter);
app.listen(port);

console.log('Server is running on port ' + port);

