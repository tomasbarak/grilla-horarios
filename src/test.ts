import { Program } from "./models/Program";
import { TimeGrid } from "./models/TimeGrid";

const timeGrid = new TimeGrid(1, []);

const program = new Program(1, "Program 1", "Description 1", 1, 0, 3600, [], []);
const program2 = new Program(2, "Program 2", "Description 2", 1, 3600, 7200, [], []);

timeGrid.addProgram(program);
timeGrid.addProgram(program2);