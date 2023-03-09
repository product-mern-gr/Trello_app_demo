import Joi from "joi";
const dotenv = require("dotenv").config();
import { ObjectId } from "mongodb";
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
        throw new Error(error);
    }
}

const pushColumnOrder = async (boardId, columnId) => {
    try {
        const result = await getDB().collection(boardColletion).updateOne(
            { _id: new ObjectId(boardId) },
            { $push: { columnOrder: columnId } },
            { returnOriginal: false }
        )
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const getDataBoard = async (boardId) => {
    try {
        const result = await getDB().collection(boardColletion).aggregate([
            { $match: { _id: new ObjectId(boardId) } },
            {
                $lookup: {
                    from: process.env.COLLECTION_COLUMN,
                    localField: "_id",
                    foreignField: "boardId",
                    as: "columns"
                }
            },
            {
                $lookup: {
                    from: process.env.COLLECTION_CARD,
                    localField: "_id",
                    foreignField: "boardId",
                    as: "cards"
                }
            }
        ]).toArray();
        return result[0];
    } catch (error) {
        throw new Error(error);
    }
}

export const boardModel = { createNew, getDataBoard, pushColumnOrder };