const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase: true,
        minLength: 10,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    number :{
        type : String,
        required : true
    },
    userType: {
        type: String,
        required: true,
        default: "APPLICANT"
    }
}, { timestamps: true }); // Add timestamps option here

module.exports = mongoose.model('User', userSchema)