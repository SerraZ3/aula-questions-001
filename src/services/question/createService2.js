
import models from '../../database/models/index.cjs';
const { Question, Answer, QuestionAnswer } = models
import hash from '../../lib/hash.cjs'
import Debug from "debug";
const debug = Debug("createService:dev");


async function createService({ question, type, answers }) {
  try {
    debug('Start', question, type, answers);
    const generateHash = hash.md5(JSON.stringify({ question, type }))

    const checkHash = await Question.findOne({ where: { hash: generateHash } })

    if (checkHash) {
      return { error: true, message: "Question already created" }
    }
    const response = await Question.create({ question, type, hash: generateHash })
    if (answers && answers.length > 0) {
      const vinculateAnswers = []
      for (let i = 0; i < answers.length; i++) {
        const answerHash = hash.md5(JSON.stringify({ answer: answers[i].text }))
        const [result, isCreated] = await Answer.findOrCreate({ where: { hash: answerHash }, defaults: { answer: answers[i].text } })

        await QuestionAnswer.findOrCreate({ where: { questionId: response.id, answerId: result.id }, defaults: { isCorrect: answers[i].isCorrect } })
      }

    }

    return { success: true, data: response };
  } catch (error) {
    console.log(error);
    debug('Error 2');
    return "Error"
  }
}
export default createService;
