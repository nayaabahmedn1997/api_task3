const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb server successfully connected");
    } catch (error) {
        console.log(`Error in connecting to the server ${error}`);
    }
}


module.exports = connectDB;