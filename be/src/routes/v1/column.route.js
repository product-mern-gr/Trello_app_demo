import express from 'express'
const router = express.Router();
import { columnValidation } from '../../validations/column.validation';
import { columnController } from '../../controllers/column.controller';

router
    .route("/")
    .get((req, res) => { console.log("get colum") })
    .post(columnValidation.createNew, columnController.createNew);

export const columnRouter = router;