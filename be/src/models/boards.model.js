import Joi from "joi";
const dotenv = require("dotenv").config();
import { getDB } from "../config/connectDB"

const boardColletion = process.env.COLLECTION_BOARD
const boardSchema = Joi.object({
    title: Joi.string().min(5).required().trim(),
    _destroy: Joi.boolean().default(false),
    columnOrder: Joi.array().items(Joi.string().default([]))
})

const validateSchema = async (data) => {
    return await boardSchema.validateAsync(data, { abortEarly: false });
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(boardColletion).insertOne(value);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const boardModel = { createNew };