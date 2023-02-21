import { cardModel } from "../models/cards.model"

const createNew = async (data) => {
    try {
        const result = await cardModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const cardService = { createNew }