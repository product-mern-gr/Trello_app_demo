import Joi from "joi";
const dotenv = require("dotenv").config();
import { getDB } from "../config/connectDB"

const cardColletion = process.env.COLLECTION_CARD
const cardSchema = Joi.object({
    title: Joi.string().min(3).required().trim(),
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    _destroy: Joi.boolean().default(false),
    cover: Joi.string().default(null)
})

const validateSchema = async (data) => {
    return await cardSchema.validateAsync(data, { abortEarly: false });
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(cardColletion).insertOne(value);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const cardModel = { createNew };