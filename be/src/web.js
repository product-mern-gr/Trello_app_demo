// import libary 
import express from "express";
import cors from "cors";
import morgan from "morgan";
const dotenv = require("dotenv").config();
// import logic 
import { apiRoute, initRoute } from "./routes/router"
import { connectDB } from "./config/connectDB";
// local variable
const app = express()
const port = process.env.PORT;
const host = "localhost";
// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// connectDB then run server
connectDB();
app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
    console.log(`${host}:${port}`);
})