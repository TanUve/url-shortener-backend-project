const userRouter = require("#Routes/user.routes.js");

const express = require("express");

const app = express();

//Middlewarea
app.use(express.json());


//Routes
app.use('/user', userRouter)


module.exports= app;