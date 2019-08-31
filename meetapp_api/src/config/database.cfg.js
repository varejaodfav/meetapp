/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */
require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT, // Sistema Gerenciador de Banco de Dados (SGBD)
  host: process.env.DB_HOST, // Servidor do banco de dados
  username: process.env.DB_USER, // Login
  password: process.env.DB_PASS, // Senha
  database: process.env.DB_NAME, // Nome do banco de dados
  define: {
    timestamps: true, // Permite a utilização de timestamps de controle
    underscored: true, // Converte o nome das tabelas para underscore
    underscoredAll: true, // Converte o nome das tabelas para underscore
  },
};
