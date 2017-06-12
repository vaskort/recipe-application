var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
