const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../models/user');

const router = express.Router();

router.get('/',(req,res) => {
    User.find()
    .then((users) => {
        res.send(users);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/',(req,res) => {
    let body = req.body;
    let user = new User(body);

    user.save()
    .then((user) => {
        res.send(user);
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = {
    userRouter: router
}