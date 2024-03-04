const userController = require('../controller/user.controller')
const authJwt = require('../middleware/authJwt')

module.exports = (app) =>{
    app.post('/api/v1/auth/searchJob', 
  
    userController.searchJob)
    
    app.post('/api/v1/auth/submitApplication',

    userController.submitApplication)

    app.post('/api/v1/auth/updateProfile',

    userController.updateProfile)
}