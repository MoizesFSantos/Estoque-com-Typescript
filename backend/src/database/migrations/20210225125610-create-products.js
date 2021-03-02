'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //criar tabela produtos
      return queryInterface.createTable('Produtos', {
         ID: {
            type: Sequelize.INTEGER,
            primaryKeyL: true,
            autoIncrement: true,
            allowNull: false,
          },
          Produto:{
            type: Sequelize.STRING,
            allowNull:false,
          },
          Valor: {
            type: Sequelize.REAL,
            allowNull:false,
          },
          Quantidade:{
            type:Sequelize.INTEGER,
            allowNull:false,
          },
          created_at:{
            type:Sequelize.DATE,
            allowNull:false,
          },
          Updated_at:{
            type:Sequelize.DATE,
            allowNull:false,
          },

        });
     
  },

  down: async (queryInterface) => {
    // deletar tabela produtos

     return queryInterface.dropTable('Produtos');
     
  }
};
