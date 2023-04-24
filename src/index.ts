import * as server from './server/server';
import { Person } from './models/Person';
import { Program } from './models/Program';

import { PersonController } from './controllers/person';
import { ProgramController } from "./controllers/program";
import { TimeGridController } from "./controllers/timeGrid";

const personController = new PersonController();
const programController = new ProgramController();
const timeGridController = new TimeGridController();

const person1: Person = new Person(1, 'John', 'Doe', 30);
const person2: Person = new Person(2, 'Jane', 'Doe', 25);
const person3: Person = new Person(3, 'John', 'Smith', 40);

const program1: Program = new Program(1, 'Program 1', 'Description 1', 1, 0, 3600, [person1], [person3]);
const program2: Program = new Program(2, 'Program 2', 'Description 2', 2, 0, 3600, [person2], [person1]);
const program3: Program = new Program(3, 'Program 3', 'Description 3', 3, 0, 3600, [person3], [person2]);


personController.setPersons([person1, person2, person3]);
programController.setPrograms([program1, program2, program3]);

server.start(80, personController, programController, timeGridController);