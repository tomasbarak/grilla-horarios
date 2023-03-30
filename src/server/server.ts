import express from 'express';
import { PersonController } from '../controllers/person';
import { ProgramController } from '../controllers/program';
import { TimeGridController } from '../controllers/timeGrid';
import * as server from './config/express';
import * as routes from './config/routes';

export const start = ( port: number, personController: PersonController, programController: ProgramController, timeGridController: TimeGridController) => {
    const app = express();

    server.config(app);
    routes.init(app, personController, programController, timeGridController);

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}