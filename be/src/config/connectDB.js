import { MongoClient } from "mongodb"
const dotenv = require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export const connectDB = async () => {
    try {
        await client.connect();
        await listDatabase(client);
        console.log("success db");


    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

const listDatabase = async (client) => {
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}



