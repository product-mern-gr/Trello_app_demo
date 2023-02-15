import express from "express";
import cors from "cors";
import morgan from "morgan";

const dotenv = require("dotenv").config();
const app = express()
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`)
    console.log(port);
})