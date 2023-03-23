import { Day } from "./models/Day";
import { Timeslot } from "./models/Timeslot";
import { TimeGrid } from "./models/TimeGrid";

const Q = 4;
const days = [];

for (let i = 0; i < 7; i++) {
    days.push(new Day(i));
}

const timeGrid = new TimeGrid(days);

let date = new Date();
date.setFullYear(2023, 0, 1);
date.setHours(0, 30, 0, 0);
console.log(days[0].getTimeslot(0).getId())
console.log(date.getTime(), timeGrid.getTimeslotByTimeRange(date, days[date.getDay()]));
