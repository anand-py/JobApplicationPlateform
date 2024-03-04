const Job = require('../model/jobs.model')
const User = require('../model/user.model')
const constants = require('../utils/constants')


validateJobRequestBody = async(req,res)=>{
    if(!req.body.title){
        res.status(400).send({
            message: "Failed! Job Title is not provided !"
        });
        return;
    }
    if(!req.body.location){
        res.status(400).send({
            message: "Failed! Job Location is not provided !"
        });
        return;
    }
    if(!req.body.client){
        res.status(400).send({
            message: "Failed! Client is not provided !"
        });
        return;
    }
    if(!req.body.description){
        res.status(400).send({
            message: "Failed! Job Description is not provided !"
        });
        return;
    }
    var userTypes = [constants.userTypes.applicant, 
        constants.userTypes.recruiter, 
        constants.userTypes.admin]
    const recruiter = await User.findOne({
        email: req.body.email 
    })
    if(!recruiter && !constants.userTypes.recruiter){
        res.status(400).send({
            message : 'Failed! Only Recruiter can add/update the job'
        })
        return;
    }
    next()
}

module.exports = {
    validateJobRequestBody : validateJobRequestBody
}
