const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    current_mentor_assigned: {
        type:mongoose.Schema.Types.ObjectId,
    },
    student_name:{
        type: String,
        required: true
    },
    previous_mentors:{
        type:Array,
        default:[]
    },
    joined_on:{
        type:Date,
        default:Date.now
    },
    course:{
        type:String,
        required: true
    }
});

const studentModel = mongoose.model('student', studentSchema);


module.exports = studentModel;