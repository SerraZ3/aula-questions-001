const SequelizeModel = require('./SequelizeModel.cjs');

class Category extends SequelizeModel {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        paranoid: true,
      }
    );
  }
}

module.exports = Category;
