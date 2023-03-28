import { Person } from "../models/Person";

let persons: Person[] = [];


export const personController = {
    getPerson: (id: number) => {
        return persons.find(person => person.id === id);
    },

    setPersons: (newPersons: Person[]) => {
        persons = newPersons;
    },
    
    getPersons: () => {
        return persons;
    },

    addPerson: (person: Person) => {
        persons.push(person);
    },

    updatePerson: (person: Person) => {
        const index = persons.findIndex(p => p.id === person.id);
        if (index === -1) {
            return;
        }

        persons[index] = person;
    },

    deletePerson: (id: number) => {
        const index = persons.findIndex(p => p.id === id);
        if (index === -1) {
            return;
        }

        persons.splice(index, 1);
    }
}