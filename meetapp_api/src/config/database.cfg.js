/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

module.exports = {
  dialect: 'postgres', // Sistema Gerenciador de Banco de Dados (SGBD)
  host: 'localhost', // Servidor do banco de dados
  username: 'meetapp', // Login
  password: 'm337APPpassw0RD', // Senha
  database: 'meetapp', // Nome do banco de dados
  define: {
    timestamps: true, // Permite a utilização de timestamps de controle
    underscored: true, // Converte o nome das tabelas para underscore
    underscoredAll: true, // Converte o nome das tabelas para underscore
  },
};
