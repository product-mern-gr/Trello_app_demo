import { boardModel } from "../models/boards.model";
const dotenv = require("dotenv").config();

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
        const board = await boardModel.getDataBoard(data);

        // add cards to columns
        board.columns.forEach(column => {
            column.cards = board.cards.filter(c => c.columnId.toString() === column._id.toString())
        })
        // delete recent cards 
        delete board.cards

        return board;
    } catch (error) {
        throw new Error(error)
    }
}

export const boardService = { createNew, getDataBoard }
