import { MongoClient } from "mongodb";
const dotenv = require("dotenv").config();

let db = null;

export const connectDB = async () => {
    const client = new MongoClient(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    await client.connect();
    db = client.db(process.env.DATABASE_NAME);
}

export const getDB = () => {
    if (!db) throw new Error("Must connect DB frist");
    return db;
}


