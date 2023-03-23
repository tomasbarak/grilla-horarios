export class Timeslot {
    id: number;
    horaInicio: Date;
    horaFin: Date;
    
    constructor(id: number, horaInicio: Date, horaFin: Date) {
        this.id = id;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }

    getId() {
        return this.id;
    }

    getHoraInicio() {
        return this.horaInicio;
    }

    getHoraFin() {
        return this.horaFin;
    }

    setId(id: number) {
        this.id = id;
    }

    setHoraInicio(horaInicio: Date) {
        this.horaInicio = horaInicio;
    }

    setHoraFin(horaFin: Date) {
        this.horaFin = horaFin;
    }
}