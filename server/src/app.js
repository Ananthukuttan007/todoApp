const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');



app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/task', taskRoute);




module.exports = app;