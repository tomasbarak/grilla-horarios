import { Application } from "express";
import * as person from "../routes/person";
import * as program from "../routes/program";
import * as timeGrid from "../routes/timeGrid";

export const init = (app: Application) => {
    person.init(app);
    program.init(app);
    timeGrid.init(app);
}