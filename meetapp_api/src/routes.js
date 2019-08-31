// Módulos
import multer from 'multer';
import { Router } from 'express';

// Configs
import multerConfig from './config/multer.cfg';

// Controllers
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SessionController from './app/controllers/SessionController';
import OrganizerController from './app/controllers/OrganizerController';
import SubscriptionController from './app/controllers/SubscriptionController';

// Middlewares
import authMiddleware from './app/middleware/authVerify';

const routes = new Router();
const upload = multer(multerConfig);

routes
  // Session
  .post('/session', SessionController.store)

  // Users
  .post('/users', UserController.store)

  // Middleware
  .use(authMiddleware)

  // Users
  .put('/users', UserController.update)

  // Banners
  .post('/files', upload.single('file'), FileController.store)

  // Meetups
  .get('/meetups', MeetupController.index)
  .post('/meetups', MeetupController.store)
  .put('/meetups/:id', MeetupController.update)
  .delete('/meetups/:id', MeetupController.delete)

  // Organized meetups
  .get('/meetups/organized', OrganizerController.index)
  .get('/meetups/organized/:id', OrganizerController.show)

  // Subscriptions
  .get('/meetups/subscription', SubscriptionController.index)
  .post('/meetups/subscription/:id', SubscriptionController.store)
  .delete('/meetups/subscription/:id', SubscriptionController.delete);

export default routes;
