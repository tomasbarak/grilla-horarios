import { Application } from "express"
import { personController } from "../../controllers/person";

export const init = (app: Application) => {
    app.get("/person", (req, res) => {
        res.send(personController.getPersons());
    });

    app.post("/person", (req, res) => {
        const person = req.body.person;
        personController.addPerson(person);
        res.send(person);
    });

    app.put("/person", (req, res) => {
        const person =  req.body.person;
        personController.updatePerson(person);
        res.send(person);
    });

    app.delete("/person", (req, res) => {
        personController.deletePerson(req.body.id);
        res.send();
    });

    app.get("/person/:id", (req, res) => {
        const person = personController.getPerson(Number(req.params.id));
        if (!person) {
            res.status(404).send("Person not found");
            return;
        } 

        res.send(person);
    });
}