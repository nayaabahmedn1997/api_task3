const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./db');
dotenv.config();


const server = http.createServer(app);
const PORT  = process.env.PORT;
connectDB();


server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


