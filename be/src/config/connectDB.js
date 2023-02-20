import mongoose from "mongoose"
const dotenv = require("dotenv").config();

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

        mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error);
    }
}