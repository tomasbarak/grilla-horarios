import { Application } from "express";
import * as personRoute from "../routes/person";
import * as programRoute from "../routes/program";
import * as timeGridRoute from "../routes/timeGrid";

export const init = (app: Application) => {
    personRoute.init(app);
    programRoute.init(app);
    timeGridRoute.init(app);
}