const SequelizeModel = require('./SequelizeModel.cjs');

class Question extends SequelizeModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        question: DataTypes.TEXT,
        type: {
          type: DataTypes.ENUM('discursive', 'trueOrFalse', 'multipleChoice', 'selection'),
          defaultValue: 'discursive',
        },
        hash: DataTypes.STRING(50),
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
}

module.exports = Question;
