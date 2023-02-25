import { boardModel } from "../models/boards.model";

const createNew = async (data) => {
    try {
        const result = await boardModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

const getDataBoard = async (data) => {
    try {
        const result = await boardModel.getDataBoard(data);

        return result;
    } catch (error) {
        throw new Error(error)
    }
}

export const boardService = { createNew }
