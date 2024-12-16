import express from 'express';
import { createController, deleteController, getController, listController, updateController } from '../../controllers/questions/QuestionController.js'
const demandRouter = express.Router();

demandRouter.post('/', createController);
demandRouter.get('/:id', getController);
demandRouter.get('/', listController);
demandRouter.put('/:id', updateController);
demandRouter.delete('/:id', deleteController);

export default demandRouter;
