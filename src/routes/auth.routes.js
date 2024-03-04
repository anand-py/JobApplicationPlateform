const authController = require('../controller/auth.controller')
const validateUserReqBody = require('../middleware/verifyUserReqBody')
const authJwt = require('../middleware/authJwt')

module.exports = (app) =>{
    app.post('/api/v1/auth/signup', 
    validateUserReqBody.validateUserRequestBody, 
    authController.signup)
    
    app.post('/api/v1/auth/login',
    authController.login)
}