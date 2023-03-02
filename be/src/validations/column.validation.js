import Joi from "joi";
import { httpStatus } from "../utilities/httpStatus"

const createNew = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string().min(3).required().trim(),
        boardId: Joi.string().required()
    })
    try {
        await condition.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            errors: new Error(error).message
        })
    }
}

const update = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string().min(3).trim()
    })
    try {
        await condition.validateAsync(req.body, {
            abortEarly: false,
            allowUnknown: true
        });
        next();
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({
            errors: new Error(error).message
        })
    }
}

export const columnValidation = { createNew, update }