const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (assuming your User model is named 'User')
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Jobs', jobSchema);
