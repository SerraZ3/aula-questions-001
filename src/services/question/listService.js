
import Debug from "debug";
import models from '../../database/models/index.cjs';
const { Question } = models
const debug = Debug("listService:dev");


async function listService({ id, }) {
  try {
    debug('Start', id,);

    const questions = await Question.findAll()

    if (!questions) {
      return { error: true, message: "Nenhuma questão encontrada" }
    }

    return { success: true, data: questions };
  } catch (error) {
    console.log(error);
    debug('Error 2');
    return "Error"
  }
}
export default listService;
