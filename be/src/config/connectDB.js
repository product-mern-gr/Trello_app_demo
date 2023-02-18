import mongoose from "mongoose"
const dotenv = require("dotenv").config();

export const connectDB = async () => {

    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true
    })
}