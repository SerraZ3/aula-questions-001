import express from 'express';
import questionRouter from './question/index.js';

const router = express.Router();

router.use('/v1', questionRouter);

export default router;
