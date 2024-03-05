const userController = require('../controller/user.controller')
const jobsController = require('../controller/jobs.controller')
const authJwt = require('../middleware/authJwt')

module.exports = (app) =>{
    app.post('/api/v1/jobs/addJob', 
    authJwt.verifyToken,
    jobsController.addJob)
    
    app.put('/api/v1/jobs/updateJob/:id',
    authJwt.verifyToken,
    // authJwt.isAdmin,
    jobsController.updateJob)

    app.delete('/api/v1/jobs/deleteJob/:id',
    authJwt.verifyToken,
    // authJwt.isAdmin,
    jobsController.deleteJob)

    // app.post('/api/v1/jobs/updateStatus',
    // authJwt.verifyToken,
    // authJwt.isAdmin,
    // jobsController.updateProfile)

}