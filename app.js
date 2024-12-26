const express = require('express');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/StudentRoutes');

const app  = express();
app.use(express.json());
app.use("/mentor", mentorRouter);
app.use("/student",studentRouter)

module.exports = app;