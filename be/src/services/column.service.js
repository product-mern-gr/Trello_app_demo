import { columnModel } from "../models/columns.model";

const createNew = async (data) => {
    try {
        const result = await columnModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const columnService = { createNew }