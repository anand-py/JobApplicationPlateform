const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = async(req,res)=>{
    const userObj = {
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8),
        city : req.body.city,
        number : req.body.number,
        userType : req.body.userType
    }
    try{
        const usercreated = await User.create(userObj)
        const postResponse = {
            name : usercreated.name,
            email : usercreated.email,
            city : usercreated.city,
            number : userObj.number,
            userTypes : usercreated.userType
        }
        res.status(200).send(postResponse)
    } catch (err) {
        
        res.status(500).send({
            message: "Some internal error while inserting the element"
        })
    }
}

exports.login = async(req,res)=>{
    const user = await User.findOne({email : req.body.email})
    try{
        if(user == null){
            return res.status(400).send({
                message : "Failed ! Email doesn't exist"
            })
        }

        var isValidPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!isValidPassword){
            return res.status(401).send({
                accessToken: null,
                message : "Failed ! Invalid Password"
            })
        }
        var token = jwt.sign({email : user.email}, process.env.SECERET,{
            expiresIn: 300 // 15 minutes
        })
        res.status(200).send({
            user : user.name,
            email : user.email,
            city : user.city,
            number : user.number,
            userType : user.userType,
            accessToken : token
        })  
}catch(err){
    res.status(500).send({
        message : 'Some internal Server Erorr',
        err : err.message
    })
}
}