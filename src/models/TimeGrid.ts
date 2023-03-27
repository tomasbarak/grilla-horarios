import { Program } from './Program';
import { Day } from './Day';
import { Timeslot } from './Timeslot';

export class TimeGrid {
    days: Day[];
    timeslots: Timeslot[];
    grid: any;
    constructor(days: Day[]) {
        this.days = days;
        this.timeslots = [];
        this.grid = {};
        days.forEach(day => {
            //Push days timeslots into general timeslots
            this.timeslots.push(...day.getTimeslots());

            //Push days timeslots into grid
            this.grid[day.id] = day.getTimeslots();
        });
    }

    getDays() {
        return this.days;
    }

    getTimeslots() {
        return this.timeslots;
    }

    getTimeslot(id: number) {
        return this.timeslots[id];
    }

    getTimeslotByDate(date: Date) {
        return this.timeslots.find(timeslot => timeslot.horaInicio.getTime() === date.getTime());
    }

    getTimeslotByTime(time: Date) {
        return this.timeslots.find(timeslot => timeslot.horaInicio.getTime() === time.getTime());
    }

    getTimeslotByTimeRange(time: Date, day: Day) {
        return this.timeslots.find(timeslot => {
            const date2 = new Date(timeslot.getId());
            // console.log("Time param:", time.getTime(), "Time param month:", time.getMonth(), "Timeslot month:", date2.getMonth(), "Timeslot day:", date2.getDay(), "Timeslot time:", date2.getTime(), "Timeslot start time:", timeslot.horaInicio.getTime(), "Timeslot end time:", timeslot.horaFin.getTime(), day.getTimeslotByDate(date2) !== undefined);
            return timeslot.horaInicio <= time && timeslot.horaFin > time && day.getTimeslotByDate(date2) !== undefined;
        });
    }

    getDay(id: number) {
        return this.days[id];
    }

    getDayByDate(date: Date) {
        return this.days.find(day => day.id === date.getDay());
    }

    addProgramToGrid(program: Program, day: Day, timeslot: Timeslot) {
        this.grid[day.id][timeslot.id] = timeslot;
    }
    displayGrid() {
        console.log(this.grid);
    }
        
}