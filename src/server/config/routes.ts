import { Application } from "express";
import { PersonController } from "../../controllers/person";
import { ProgramController } from "../../controllers/program";
import { TimeGridController } from "../../controllers/timeGrid";
import * as personRoute from "../routes/person";
import * as programRoute from "../routes/program";
import * as timeGridRoute from "../routes/timeGrid";

export const init = (app: Application, personController: PersonController, programController: ProgramController, timeGridController: TimeGridController) => {
    personRoute.init(app, personController);
    programRoute.init(app, programController);
    timeGridRoute.init(app, programController, timeGridController);
}