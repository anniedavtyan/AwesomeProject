const express = require('express')
const mongoose = require("mongoose");

const app = express()
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/TEST", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB is connected'));



const userRouter = require('./Routes/userRouter');
app.use('/users', userRouter);

app.listen(4000)
