import { columnModel } from "../models/columns.model";

const createNew = async (data) => {
    try {
        const result = await columnModel.createNew(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const update = async (id, data) => {
    try {
        const update = {
            ...data
        }
        const result = await columnModel.update(id, data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const columnService = { createNew, update }