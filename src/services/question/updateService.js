
import Debug from "debug";
import models from '../../database/models/index.cjs';
import hash from "../../lib/hash.cjs";
const { Question } = models
const debug = Debug("updateService:dev");


async function updateService({ id, question, type }) {
  try {
    debug('Start', id,);

    const questionSearch = await Question.findOne({ where: { id } })

    if (!questionSearch) {
      return { error: true, message: "Questão não encontrada" }
    }
    const generateHash = hash.md5(JSON.stringify({ question, type }))

    const checkHash = await Question.findOne({ where: { hash: generateHash } })
    console.log(checkHash)

    if (checkHash) {
      return { error: true, message: "Question already created" }
    }
    const response = await Question.update({ question, type }, { where: { id } })
    console.log(response)
    return { success: true, data: { ...questionSearch.toJSON(), question, type } };
  } catch (error) {
    console.log(error);
    debug('Error 2');
    return "Error"
  }
}
export default updateService;
