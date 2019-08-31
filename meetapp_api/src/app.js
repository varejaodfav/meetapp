/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path';

// Rotas
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Cross-Origin Resources Sharing
    this.server.use(cors());

    this.server.use(express.json());

    // Servir arquivos estáticos na URL
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
