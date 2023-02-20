// import libary 
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
const dotenv = require("dotenv").config();
// import logic 
import { connectDB } from "./config/connectDB";
import { BoardModel } from "./models/boards.model";
// local variable
const app = express()
const port = process.env.PORT;
const host = process.env.HOST;
// use middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
//connectDB then run server
connectDB().then(() => console.log("connect DB success"))
    .then(() => runServer())
    .catch(error => {
        console.log(error);
        process.exit();
    })

const runServer = () => {
    app.get('/test', async (req, res) => {
        const fake = {
            title: "hcb"
        }
        await BoardModel.createNew(fake);
    })

    app.listen(port, () => {
        // console.log(`Example app listening on port ${port}`)
        console.log(`${host}:${port}`);
    })
}