import Joi from "joi";
const dotenv = require("dotenv").config();
import { getDB } from "../config/connectDB"

const columColletion = process.env.COLLECTION_COLUM
const columSchema = Joi.object({
    title: Joi.string().min(3).required().trim(),
    boardId: Joi.string().required(),
    _destroy: Joi.boolean().default(false),
    cardOrder: Joi.array().items(Joi.string().default([]))
})

const validateSchema = async (data) => {
    return await columSchema.validateAsync(data, { abortEarly: false });
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data);
        const result = await getDB().collection(columColletion).insertOne(value);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const columnModel = { createNew };