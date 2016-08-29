var express = require('express');
var middleware = require('./config/middleware.js');
var router = require('./config/router.js')

var app = express();
middleware(app, express);

app.use('/', router);

var port = 3003;

app.listen(port);
console.log('Listening on port', port, 'at', new Date());