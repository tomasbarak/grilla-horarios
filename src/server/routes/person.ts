import { Application } from "express"
import { PersonController } from "../../controllers/person";

export const init = (app: Application, personController: PersonController) => {
    
    app.post("/person", (req, res) => {
        const person = req.body;
        personController.addPerson(person);
        res.status(201).json(person);
    });

    app.get("/person", (req, res) => {
        res.json(personController.getPersons());
    });

    app.put("/person", (req, res) => {
        const person =  req.body;
        personController.updatePerson(person);
        res.json(person);
    });

    app.delete("/person/:id", (req, res) => {
        personController.deletePerson(Number(req.params.id));
        res.send();
    });

    app.get("/person/:id", (req, res) => {
        const person = personController.getPerson(Number(req.params.id));
        if (!person) {
            res.status(404).send("Person not found");
            return;
        } 

        res.json(person);
    });
}