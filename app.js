const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
const morgan = require('morgan');

const mongoose = require('./config/db');
const { User } = require('./models/user');
const { userRouter } = require('./routes/users');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('short'));
app.use('/users',userRouter);

app.get('/',(req,res) => {
    res.send({
        message: 'Welcome to the page'
    })  
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})