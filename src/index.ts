import { Day } from "./models/Day";
import { Timeslot } from "./models/Timeslot";
import { TimeGrid } from "./models/TimeGrid";

const Q = 36;
const days = [];

for (let i = 0; i < 7; i++) {
    days.push(new Day(2023, 0, i, Q));
}

const timeGrid = new TimeGrid(days);

timeGrid.displayGrid();