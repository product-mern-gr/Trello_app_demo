import express from 'express';
const router = express.Router();
import { boardController } from '../../controllers/board.controller';
import { boardValidation } from '../../validations/board.validation';

router
    .route("/")
    .get((req, res) => { console.log("board get") })
    .post(boardValidation.createNew, boardController.createNew)

export const boardRouter = router;