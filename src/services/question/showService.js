
import Debug from "debug";
import models from '../../database/models/index.cjs';
const { Question } = models
const debug = Debug("getService:dev");


async function getService({ id, }) {
  try {
    debug('Start', id,);

    const question = await Question.findOne({ where: { id } })

    if (!question) {
      return { error: true, message: "Questão não encontrada" }
    }

    return { success: true, data: question };
  } catch (error) {
    console.log(error);
    debug('Error 2');
    return "Error"
  }
}
export default getService;
