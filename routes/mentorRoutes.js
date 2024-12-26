const express = require('express');
const mentorModel = require('../models/mentorModel');

const mentorRouter = express.Router();


mentorRouter.post("/create-mentor", async (req, res)=>{
    try {
        const {mentor_name, course} = req.body;
        const existingMentor = await mentorModel.findOne({mentor_name});

        //Check if mentor exists
        if(existingMentor)
        {
            return res.status(400).json({
                message:"Mentor already exists"
            })
        }
        //Create a new mentor
        const newMentor = new mentorModel({mentor_name, course});
        await newMentor.save();
        return res.status(201).json({
            message:"Mentor created successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message:"Error in creating a mentor"
        })
    }
});

module.exports = mentorRouter;