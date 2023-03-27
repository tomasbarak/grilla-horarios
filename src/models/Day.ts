import { Timeslot } from './Timeslot';
import moment from 'moment';


export class Day {
    id: number;
    timeslots: Timeslot[];
    
    constructor(year: number, month: number, id: number, q: number) {
        this.id = id;
        this.timeslots = this.initTimeslots(year, month, q);
    }

    private initTimeslots(year: number, month: number, Q: number) {
        let timeslots: Timeslot[] = [];

        const block_duration = 24 * 60 / Q;

        const start = moment().startOf("month").startOf('day').year(year).month(month).day(this.id).add(0, 'hours');
        const end = start.clone().startOf("day").add(24, 'hours');

        let slices: any[] = [];
        let count = 0;

        while (start.isBefore(end)) {
            slices[count] = {
                start: start.clone(),
                end: start.clone().add(block_duration, 'minutes')
            };
            start.add(block_duration, 'minutes');
            count++;
        }

        slices.forEach((slice, index) => {
            // console.log(slice.start.toDate().getDay(), slice.start.toDate().toLocaleTimeString(), slice.end.toDate().toLocaleTimeString());
            timeslots.push(new Timeslot(slice.start.toDate().getTime(), slice.start.toDate(), slice.end.toDate()));
        });

        // const start_date = new Date();
        

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