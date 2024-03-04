const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    joblisting: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Jobs"
    },
    resume: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'PENDING',
    },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
