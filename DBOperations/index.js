const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db');
var empController = require('./controllers/empController');
var app = express();
app.use(cors({origin: '*', methods: 'GET, POST, PUT, DELETE'}));


app.use(bodyParser.json());
app.use('/employee', empController);

app.listen(4000, () => {
    console.log('Server started at port : 4000');
});
