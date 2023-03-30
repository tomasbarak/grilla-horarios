import { Person } from "../models/Person";



export class PersonController {
    private persons: Person[];

    constructor() {
        this.persons = [];
    }

    public getPerson(id: number) {
        return this.persons.find(person => person.getId() === id);
    }

    public setPersons(newPersons: Person[]) {
        this.persons = newPersons;
    }
    
    public getPersons() {
        return this.persons;
    }

    public addPerson(person: Person) {
        this.persons.push(person);
    }

    public updatePerson(person: Person) {
        const index = this.persons.findIndex(p => p.getId() === person.getId());
        if (index === -1) {
            return;
        }

        this.persons[index] = person;
    }

    public deletePerson(id: number) {
        const index = this.persons.findIndex(p => p.getId() === id);
        if (index === -1) {
            return;
        }

        this.persons.splice(index, 1);
    }
}