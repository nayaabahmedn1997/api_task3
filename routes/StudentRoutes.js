const express = require('express');
const studentModel = require('../models/studentModel');


const studentRouter = express.Router();

studentRouter.post("/create-student",  async (req, res)=>{
    try {
        const {student_name, course} = req.body;

        //Check for existing student
        const existingStudent  = await studentModel.findOne({student_name});
        if(existingStudent)
        {
            return res.status(400).json({
                "message":"Student already exists"
            });
        }
        //Create a new student
        const newStudent = new studentModel({student_name, course});
        await newStudent.save();
        return res.status(201).json({
            "message":"Student created successfully"
        });
    } catch (error) {
        return res.status(500).json({
            "Error":`Server error ${error}`
        })
    }
})


module.exports =  studentRouter;