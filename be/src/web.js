import express from "express";
import cors from "cors";
import morgan from "morgan";
import { apiRoute, initRoute } from "./routes/router"
import { connectDB } from "./config/connectDB";
import { connect } from "http2";

const dotenv = require("dotenv").config();
const app = express()
const port = process.env.PORT;
const host = "localhost";

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

connectDB();

app.get('/', (req, res) => {
    res.send("hello");
})


app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
    console.log(`${host}:${port}`);
})