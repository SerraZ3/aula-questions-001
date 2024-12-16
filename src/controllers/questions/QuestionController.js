import createService from '../../services/question/createService.js';
import showService from '../../services/question/showService.js';
import listService from '../../services/question/listService.js';



import Debug from "debug";
import updateService from '../../services/question/updateService.js';
import deleteService from '../../services/question/deleteService.js';
const debug = Debug("Controller:dev");

export async function createController(req, res, next) {
  debug('createController');
  const { question, type, answers } = req.body;

  const data = await createService({ question, type, answers })

  return res.json(data);
}

export async function getController(req, res, next) {
  debug('getController');

  const { id } = req.params;
  const data = await showService({ id })
  return res.json(data);
}

export async function listController(req, res, next) {
  debug('listController');

  const { id } = req.params;
  const data = await listService({ id })
  return res.json(data);
}


export async function updateController(req, res, next) {
  debug('updateController');

  const { id } = req.params;
  const { question, type } = req.body;
  const data = await updateService({ id, question, type })
  return res.json(data);
}

export async function deleteController(req, res, next) {
  debug('deleteController');

  const { id } = req.params;
  const { question, type } = req.body;
  const data = await deleteService({ id, question, type })
  return res.json(data);
}


// module.exports = {
//   createController,
//   callbackController,
//   getController,
// };
