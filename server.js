const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config();


const server = http.createServer(app);
const PORT  = process.env.PORT;



server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


