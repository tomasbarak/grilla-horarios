import { Timeslot } from './Timeslot';

export class Day {
    id: number;
    timeslots: Timeslot[];
    
    constructor(id: number) {
        this.id = id;
        this.timeslots = this.initTimeslots(36);
    }

    private initTimeslots(Q: number) {
        let timeslots = [];
        const day_minutes = 24 * 60;
        const timeslot_duration_minutes = day_minutes / Q;
        let date = new Date();
        date.setFullYear(2023, 0, 1);
        date.setHours(0, 0, 0, 0);
        for (let i = 0; i < Q; i++) {
            const current_day = date.getDay();
            const distance = i - current_day;
            date.setDate(date.getDate() + distance);
            timeslots.push(new Timeslot(date.valueOf(), date, new Date(date.getTime() + timeslot_duration_minutes * 60000)));
            date = new Date(date.getTime() + timeslot_duration_minutes * 60000);
        }
        return timeslots;
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

    getTimeslotByTimeRange(time: Date) {
        return this.timeslots.find(timeslot => timeslot.horaInicio.getTime() <= time.getTime() && timeslot.horaFin.getTime() > time.getTime());
    }

}