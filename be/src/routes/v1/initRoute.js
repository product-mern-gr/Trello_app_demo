import express from 'express'
import { httpStatus } from '../../utilities/httpStatus';
import { boardRouter } from './board.route';
const router = express.Router();

router.use("/board", boardRouter);



export const apiV1 = router