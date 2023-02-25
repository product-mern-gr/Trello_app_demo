import Joi from "joi";
import { ObjectId } from "mongodb";
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
        const validateValue = await validateSchema(data);
        const insertValue = {
            ...validateValue,
            boardId: new ObjectId(validateValue.boardId),
            columnId: new ObjectId(validateValue.columnId)
        }
        const result = await getDB().collection(columnCollection).insertOne(insertValue);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const cardModel = { createNew };