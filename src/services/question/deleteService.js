
import Debug from "debug";
import models from '../../database/models/index.cjs';
const { Question } = models
const debug = Debug("deleteService:dev");


async function deleteService({ id }) {
  try {
    debug('Start', id,);

    const questionSearch = await Question.findOne({ where: { id } })

    if (!questionSearch) {
      return { error: true, message: "Questão não encontrada" }
    }

    const response = await Question.destroy({ where: { id } })
    console.log(response)
    return { success: true, data: "Questão desativada" };
  } catch (error) {
    console.log(error);
    debug('Error 2');
    return "Error"
  }
}
export default deleteService;
