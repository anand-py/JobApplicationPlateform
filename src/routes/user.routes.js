const userController = require('../controller/user.controller')
const authJwt = require('../middleware/authJwt')

module.exports = (app) =>{
    app.get('/api/v1/auth/searchJob', 
    
    userController.searchJob)
    
    app.post('/api/v1/auth/submitApplication',
    authJwt.verifyToken,
    userController.submitApplication)

    app.put('/api/v1/auth/updateProfile',
    authJwt.verifyToken,
    userController.updateProfile)
}