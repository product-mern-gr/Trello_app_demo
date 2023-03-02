import express from 'express'
const router = express.Router();
import { columnValidation } from '../../validations/column.validation';
import { columnController } from '../../controllers/column.controller';

//create column
router
    .route("/")
    .post(columnValidation.createNew, columnController.createNew);
//update column
router
    .route('/:id')
    .put(columnValidation.update, columnController.update)



export const columnRouter = router;