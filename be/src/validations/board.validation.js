import Joi from "joi";
import { httpStatus } from "../utilities/httpStatus";

const createNew = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string().min(5).required(),
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

export const boardValidation = { createNew }