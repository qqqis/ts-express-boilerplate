import { Express } from 'express';
import { registerRoutes, userController } from './v1/index';

const init = (app: Express) => {
    registerRoutes(app, userController);
};

export { init };
