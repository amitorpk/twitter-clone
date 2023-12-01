const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const homeRoutes = require('./routes/home')

const app = express()

//to parse the request body
app.use(bodyParser.json());  // content-type:application/json

// to make express app serve static files
app.use('public',express.static(path.join('__dirname','public')));

app.use("/",homeRoutes);

app.listen(3000)