const jwt = require('jsonwebtoken')
const constants = require('../utils/constants')
const User = require('../model/user.model')


verifyToken = (req,res,next)=>{
    let token = req.headers['x-access-token']
    if(!token){
        return res.status(403).send({
            message : 'No Token Provided'
        })
    }
    jwt.verifyToken(token, process.env.SECERET, (err,decoded)=>{
        if(err){
            return res.status(401).send({
                message : "Unauthorized"
            })
        }
        req.userId = decoded.id;
        next()
    })
}

isAdmin = async(req,res,next)=>{
    const userId = await User.findOne({
        userId : req.userId
    })
    if(user && user.userType == constants.userTypes.admin){
        next()
    }else{
        return res.status(403).send({
            message : 'Require Admin Role'
        })
    }
}


const authJwt = {
    verifyToken : verifyToken,
    isAdmin : isAdmin 
}

module.exports = authJwt