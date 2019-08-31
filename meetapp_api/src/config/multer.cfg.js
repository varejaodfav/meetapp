/**
 *  "MeetApp API"
 *
 *  Aplicação desenvolvida para aquisição do certificado do curso
 *  Bootcamp GoStack, da RocketSeat.
 *
 *  Autor: Diego Varejão <varejaodfav@gmail.com>
 */

// Módulos
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return callback(err);

        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
