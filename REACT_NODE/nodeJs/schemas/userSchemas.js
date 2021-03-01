const mongoose = require('mongoose');

const Users = {
    userName: String,
    password: String
}

const userModel = mongoose.model('users', Users);

module.exports = {
    userModel
}