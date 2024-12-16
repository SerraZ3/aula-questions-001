module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['discursive', 'trueOrFalse', 'multipleChoice', 'selection'],
        defaultValue: 'discursive',
        allowNull: false,
      },
      hash: {
        type: Sequelize.STRING(50),
        allowNull: false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('Questions'),
};
