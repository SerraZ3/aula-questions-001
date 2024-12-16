const SequelizeModel = require('./SequelizeModel.cjs');

class Answer extends SequelizeModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        answer: DataTypes.TEXT,
        hash: DataTypes.STRING(50),
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
}

module.exports = Answer;
