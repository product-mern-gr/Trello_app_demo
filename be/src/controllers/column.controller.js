import { columnService } from "../services/column.service"
import { httpStatus } from "../utilities/httpStatus";

const createNew = async (req, res) => {
    try {
        const result = await columnService.createNew(req.body);
        console.log(result);
        res.status(httpStatus.OK).json(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const result = await columnService.update(id, req.body);
        res.status(httpStatus.OK).json(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

export const columnController = { createNew, update }