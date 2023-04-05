import { Application } from "express"
import { ProgramController } from "../../controllers/program";
import { TimeGridController } from "../../controllers/timeGrid";
import { TimeGrid } from "../../models/TimeGrid";

export const init = (app: Application, programController: ProgramController, timeGridController: TimeGridController) => {
    
    app.post("/timeGrid", (req, res) => {
        const timeGrid = new TimeGrid(Number(req.body.id), []);
        timeGridController.addTimeGrid(timeGrid);
        res.json(timeGrid);
    });
    
    app.get("/timeGrid", (req, res) => {
        res.json(timeGridController.getTimeGrids());
    });

    app.delete("/timeGrid/:id", (req, res) => {
        timeGridController.deleteTimeGrid(Number(req.params.id));
        res.send();
    });
    
    //No hay put porque no se puede modificar el id
    
    app.get("/timeGrid/:id", (req, res) => {
        res.json(timeGridController.getTimeGrid(Number(req.params.id)));
    });
    
    app.post("/timeGrid/:id/program" , (req, res) => {
        const timeGrid = timeGridController.getTimeGrid(Number(req.params.id));
        const program = programController.getProgram(Number(req.body.id));
        if (!timeGrid || !program) {
            res.status(404).send("TimeGrid or Program not found");
            return;
        }

        timeGrid.addProgram(program);
        res.json(program);
    });

    app.get("/timeGrid/:id/program/:id", (req, res) => {
        const timeGrid = timeGridController.getTimeGrid(Number(req.params.id));
        const program = programController.getProgram(Number(req.params.id));
        if (!timeGrid || !program) {
            res.status(404).send("TimeGrid or Program not found");
            return;
        }

        res.json(program);
    });

    app.delete("/timeGrid/:id/program/:id", (req, res) => {
        const timeGrid = timeGridController.getTimeGrid(Number(req.params.id));
        const program = programController.getProgram(Number(req.params.id));
        if (!timeGrid || !program) {
            res.status(404).send("TimeGrid or Program not found");
            return;
        }

        timeGrid.removeProgram(program);
        res.send();
    })
}