import express from 'express';
const router = express.Router();
import { cardValidation } from "../../validations/card.validation"
import { cardController } from "../../controllers/card.controlller"

router
    .route("/")
    .post(cardValidation.createNew, cardController.createNew)

export const cardRouter = router;