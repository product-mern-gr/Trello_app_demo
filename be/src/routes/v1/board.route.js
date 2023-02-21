import express from 'express'
import { httpStatus } from '../../utilities/httpStatus';
import { boardController } from '../../controllers/board.controller';
import { boardValidation } from '../../validations/board.validation';
const router = express.Router();

router.route("/")
    .get((req, res) => {
        console.log("board get")
    }).post(boardValidation.createNew, boardController.createNew)

export const boardRouter = router;