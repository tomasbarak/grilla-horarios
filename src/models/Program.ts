import { Person } from "./Person";

export class Program {
    id: number;
    name: string;
    description: string;
    dayOfWeek: number; //0 to 6
    startTime: number; // seconds elapsed since the beginning of the day
    endTime: number; // seconds elapsed since the beginning of the day
    conductores: Person[];
    productores: Person[];

    constructor(id: number, name: string, description: string, dayOfWeek: number, startTime: number, endTime: number, conductores: Person[], productores: Person[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.conductores = conductores;
        this.productores = productores;
    }

    // Getters

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getDayOfWeek(): number {
        return this.dayOfWeek;
    }

    getStartTime(): number {
        return this.startTime;
    }

    getEndTime(): number {
        return this.endTime;
    }

    getConductores(): Person[] {
        return this.conductores;
    }

    getProductores(): Person[] {
        return this.productores;
    }

    // Setters

    setId(id: number): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setDayOfWeek(dayOfWeek: number): void {
        this.dayOfWeek = dayOfWeek;
    }

    setStartTime(startTime: number): void {
        this.startTime = startTime;
    }

    setEndTime(endTime: number): void {
        this.endTime = endTime;
    }

    setConductores(conductores: Person[]): void {
        this.conductores = conductores;
    }

    setProductores(productores: Person[]): void {
        this.productores = productores;
    }

    // Other methods

    addConductor(conductor: Person): void {
        this.conductores.push(conductor);
    }

    addProductor(productor: Person): void {
        this.productores.push(productor);
    }

    removeConductor(conductor: Person): void {
        this.conductores = this.conductores.filter((person) => person.getId() !== conductor.getId());
    }

    removeProductor(productor: Person): void {
        this.productores = this.productores.filter((person) => person.getId() !== productor.getId());
    }


}