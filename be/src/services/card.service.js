import { cardModel } from "../models/cards.model"
import { columnModel } from "../models/columns.model"

const createNew = async (data) => {
    try {
        const result = await cardModel.createNew(data);
        await columnModel.pushCardOrder(result.columnId.toString(), result._id.toString());
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const cardService = { createNew }