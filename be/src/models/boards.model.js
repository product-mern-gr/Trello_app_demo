import mongoose from "mongoose";
const Schema = mongoose.Schema;

const boardsSchema = new Schema({
    title: {
        type: String,
        require: true,
        min: 1,
        max: 100,
    },
    columnOrder: {
        type: String,
        array: []
    }
})

module.exports = mongoose.model("boards", boardsSchema);