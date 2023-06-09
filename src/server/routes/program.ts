import { Application } from "express"
import { ProgramController } from "../../controllers/program";

export const init = (app: Application, programController: ProgramController) => {
    
    app.post("/program", (req, res) => {
        const program = req.body.program;
        programController.addProgram(program);
        res.json(program);
    });
    
    app.get("/program", (req, res) => {
        const programs = programController.getPrograms();
        res.json(programs);
    });

    app.put("/program", (req, res) => {
        const program =  req.body.program;
        programController.updateProgram(program);
        res.json(program);
    });

    app.delete("/program", (req, res) => {
        const program = req.body.program;
        programController.deleteProgram(program);
        res.send();
    });

    app.get("/program/:id", (req, res) => {
        const program = programController.getProgram(Number(req.params.id));
        if (!program) {
            res.status(404).send("Program not found");
            return;
        } 

        res.json(program);
    });
}