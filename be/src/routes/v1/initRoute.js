import express from 'express'
import { httpStatus } from '../../utilities/httpStatus';
import { boardRouter } from './board.route';
import { cardRouter } from './card.route';
import { columnRouter } from './column.route';
const router = express.Router();

router.use("/board", boardRouter);
router.use("/column", columnRouter);
router.use("/card", cardRouter);

export const apiV1 = router