import Joi from "joi";
const dotenv = require("dotenv").config();
const { ObjectId } = require('mongodb');
import { getDB } from "../config/connectDB"


const columnCollection = process.env.COLLECTION_COLUMN

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
        const validateValue = await validateSchema(data);
        const insertValue = {
            ...validateValue,
            boardId: new ObjectId(validateValue.boardId)
        }
        const result = await getDB().collection(columnCollection).insertOne(insertValue);
        console.log(result);
    } catch (error) {
        throw new Error(error);
    }
}
const update = async (id, data) => {
    try {
        const objectId = new ObjectId(id);
        const result = await getDB().collection(columnCollection).findOneAndUpdate(
            { _id: objectId },
            { $set: data },
            { returnOriginal: false }
        )
        console.log(result);
        if (result.lastErrorObject.updateExisting) {
            return result.value;
        }
    } catch (error) {
        throw new Error(error);
    }
}


export const columnModel = { createNew, update };
