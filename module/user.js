//include mongoose
const mongoose = require('mongoose');

//create user schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    age: Number,
});

//create model
const userModel = mongoose.model("usercollection",userSchema,"usercollection");

//export model
module.exports = userModel;
