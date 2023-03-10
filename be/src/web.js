// import libary 
import express from "express";
import cors from "cors";
import morgan from "morgan";
const dotenv = require("dotenv").config();
// import logic 
import { connectDB } from "./config/connectDB";
import { boardModel } from "./models/boards.model";
import { apiV1 } from "./routes/v1/initRoute";
import CorsOptions from "cors";
// local variable
const app = express()
const port = process.env.PORT;
const host = process.env.HOST;
// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
//connectDB then run server
connectDB().then(() => console.log("connect DB success"))
    .then(() => runServer())
    .catch(error => {
        console.log(error);
        process.exit();
    })

const runServer = () => {

    // use route
    app.use("/v1", apiV1);

    app.listen(port, () => {
        // console.log(`Example app listening on port ${port}`)
        console.log(`${host}:${port}`);
    })
}