import { Program } from './Program';
import { Day } from './Day';
import { Timeslot } from './Timeslot';

export class TimeGrid {
    days: Day[];
    timeslots: Timeslot[];
    grid: Timeslot[][];
    constructor(days: Day[]) {
        this.days = days;
        this.timeslots = [];
        this.grid = [];
        days.forEach(day => {
            //Push days timeslots into general timeslots
            this.timeslots.push(...day.getTimeslots());
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
            return date2.getTime() <= time.getTime() && timeslot.horaFin.getTime() > time.getTime() && day.getTimeslotByDate(date2) !== undefined && date2.getDay(), day.id;
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
        
}