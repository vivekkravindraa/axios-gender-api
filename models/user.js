const mongoose = require('mongoose');
const axios = require('axios');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String
    }
})

userSchema.pre('save',function(next) {
    let user = this;
    if(!user.gender){
        axios.get(`https://gender-api.com/get?name=${user.username}&key=wubmUMBbjXXCSpQrnP`)
        .then(function(response) {
            console.log(response.data.gender);
            user.gender = response.data.gender;
            next();
        })
        .catch(function(err) {
            return Promise.reject(err);
        })
    }
})

const User = mongoose.model('User',userSchema);
module.exports = { User }