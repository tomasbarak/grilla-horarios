import { start } from './server/server';
import { setPersons } from './controllers/person';
import { Person } from './models/Person';

const person1 = new Person(1, 'John', 'Doe', 30);
const person2 = new Person(2, 'Jane', 'Doe', 25);
const person3 = new Person(3, 'John', 'Smith', 40);

setPersons([person1, person2, person3]);

start(3000);