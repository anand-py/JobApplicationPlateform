// const userController = require('../controller/user.controller')
const jobsController = require('../controller/jobs.controller')
const authJwt = require('../middleware/authJwt')

module.exports = (app) =>{
    app.post('/api/v1/auth/addJob', 
  
    userController.searchJob)
    
    app.post('/api/v1/auth/updateJob',

    userController.submitApplication)

    app.post('/api/v1/auth/deleteJob',

    userController.updateProfile)

    app.post('/api/v1/auth/updateStatus',

    userController.updateProfile)

}