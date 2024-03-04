const User = require('../model/user.model')
const constants = require('../utils/constants')

validateUserRequestBody = async(req,res,next)=>{
    if (!req.body.name) {
        res.status(400).send({
            message: "Failed! Name is not provided !"
        });
        return;
    }
    if (!req.body.city) {
        res.status(400).send({
            message: "Failed! City is not provided !"
        });
        return;
    }
    if (!req.body.number) {
        res.status(400).send({
            message: "Failed! Number is not provided !"
        });
        return;
    }
    if(!isValidEmail(req.body.email)){
        res.status(400).send({
            message: "Failed! Email is not valid!"
        });
        return;
    }

    // check user is exist or not through email
    const checkUser = await User.findOne({email : req.body.email})
    if(checkUser != null){
        return res.status(400).send({
            message: "Failed! Email is already exists!"
        });
    }

 
    

//validate userType
const userType = req.body.userType;
    const userTypes = [constants.userTypes.applicant, constants.userTypes.recruiter, constants.userTypes.admin]
    if (userType && !userTypes.includes(userType)) {
        res.status(400).send({
            message: "UserType provided is invalid. Possible values APPLICANT | RECRUITER | ADMIN "
        });
        return;
    }

    next()
}
const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
module.exports = {
    validateUserRequestBody : validateUserRequestBody
}