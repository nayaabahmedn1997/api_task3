const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    mentor_name:{
        type: String,
        required: true
    },
    students_assigned:{
        type: Array,
        default:[]
    },
    previously_assigned_students:{
        type:Array,
        default:[]
    },
    course:{
        type:String,
        required: true
    },
    joined_on:{
        type:Date,
        default: Date.now
    }
});

const mentorModel = mongoose.model('mentor', mentorSchema);

module.exports  = mentorModel;
