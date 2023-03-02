import { boardService } from "../services/board.service";
import { httpStatus } from "../utilities/httpStatus";

const createNew = async (req, res) => {
    try {
        const result = await boardService.createNew(req.body);
        console.log(result);
        res.status(httpStatus.OK).json(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const getDataBoard = async (req, res) => {
    try {
        const result = await boardService.getDataBoard(req.params);
        res.status(httpStatus.OK).json(result);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

export const boardController = { createNew, getDataBoard }