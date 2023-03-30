import { Person } from "./Person";

export class Program {
    private id: number;
    private name: string;
    private description: string;
    private dayOfWeek: number; //0 to 6
    private startTime: number; // seconds elapsed since the beginning of the day
    private endTime: number; // seconds elapsed since the beginning of the day
    private conductores: Person[];
    private productores: Person[];

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

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDayOfWeek(): number {
        return this.dayOfWeek;
    }

    public getStartTime(): number {
        return this.startTime;
    }

    public getEndTime(): number {
        return this.endTime;
    }

    public getConductores(): Person[] {
        return this.conductores;
    }

    public getProductores(): Person[] {
        return this.productores;
    }

    // Setters

    public setId(id: number): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setDayOfWeek(dayOfWeek: number): void {
        this.dayOfWeek = dayOfWeek;
    }

    public setStartTime(startTime: number): void {
        this.startTime = startTime;
    }

    public setEndTime(endTime: number): void {
        this.endTime = endTime;
    }

    public setConductores(conductores: Person[]): void {
        this.conductores = conductores;
    }

    public setProductores(productores: Person[]): void {
        this.productores = productores;
    }

    // Other methods

    public addConductor(conductor: Person): void {
        this.conductores.push(conductor);
    }

    public addProductor(productor: Person): void {
        this.productores.push(productor);
    }

    public removeConductor(conductor: Person): void {
        this.conductores = this.conductores.filter((person) => person.getId() !== conductor.getId());
    }

    public removeProductor(productor: Person): void {
        this.productores = this.productores.filter((person) => person.getId() !== productor.getId());
    }


}