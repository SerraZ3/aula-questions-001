const SequelizeModel = require('./SequelizeModel.cjs');

class QuestionCategory extends SequelizeModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        questionId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
}

module.exports = QuestionCategory;
