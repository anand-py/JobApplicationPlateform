const Job = require('../model/jobs.model')
const constants = require('../utils/constants')

// job search based on title , location and industry
exports.addJob = async (req, res) => {
    const jobObj = {
        title : req.body.title,
        location : req.body.location,
        client : req.body.client,
        description : req.body.description,
        recruiter: req.body.recruiter
    }
    try {
        const createdJob = await Job.create(jobObj) 
        const postResponse = {
            title: createdJob.title,
            location: createdJob.location,
            client: createdJob.client,
            description: createdJob.description,
            recruiter: createdJob.recruiter
        }
        return res.status(200).send(postResponse)
    } catch (err) {
        res.status(500).send({
            err : err.message,
            message: "Some internal error while inserting the element"
        })
    }

}

// submit for the job
exports.updateJob = async (req, res) => {
    try {
        const savedJob = await Job.findOne({ _id: req.params.id })
        if (!savedJob) {
            return res.status(404).send({
                message: "Failed! Job not found"
            })
        }
      
        savedJob.title = req.body.title !== undefined ? req.body.title : savedJob.title;
        savedJob.location = req.body.location !== undefined ? req.body.location : savedJob.location;
        savedJob.client = req.body.client !== undefined ? req.body.client : savedJob.client;
        savedJob.description = req.body.description !== undefined ? req.body.description : savedJob.description;

        var updatedJob = await savedJob.save(); // Corrected typo
        console.log(updatedJob)
        res.status(200).send(updatedJob);

    } catch (err) {

        res.status(500).send({
            err:err.message,
            message: "Some internal error while inserting the element"
        })
    }
}

//update User Info

exports.deleteJob = async (req, res) => {
    try {
        await Job.deleteOne({ _id: req.params.id })
        res.status(200).send({
            message: "Successfully deleted Job with id [" + req.params.id + "]"
        })
    } catch (err) {

        res.status(500).send({
            message: "Some internal error while inserting the element"
        })
    }
}