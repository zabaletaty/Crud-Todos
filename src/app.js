const express = require("express");
const userRouter = require('./todos/todos.router').router

const app = express();

app.use(express.json())

const puerto = 9000;

app.use('/api/v1', userRouter)

app.listen(puerto,(req, res) =>{
    console.log("puerto " + puerto)
})