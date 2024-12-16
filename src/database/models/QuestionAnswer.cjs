const SequelizeModel = require('./SequelizeModel.cjs');

class QuestionAnswer extends SequelizeModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        questionId: DataTypes.INTEGER,
        answerId: DataTypes.INTEGER,
        isTruth: DataTypes.BOOLEAN,
        isCorrect: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
}

module.exports = QuestionAnswer;
