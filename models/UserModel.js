const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false,
        unique: true
    },
    password:{
        type: String,
        required: false
    },
    registerDate:{
        type: Date,
        default: Date.now
    }
})



module.exports = User = mongoose.model("user", UserSchema)