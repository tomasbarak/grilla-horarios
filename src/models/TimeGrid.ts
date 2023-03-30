import { Person } from "./Person";
import { Program } from "./Program";
import { isProgramOverlapping } from "../helpers/timeGrid/security";
export class TimeGrid {
    private id: number;
    private programs: Program[];

    constructor(id: number, programs: Program[]) {
        this.id = id;
        this.programs = programs;
    }

    // Getters

    public getId(): number {
        return this.id;
    }

    public getPrograms(): Program[] {
        return this.programs;
    }

    // Setters

    public setId(id: number): void {
        this.id = id;
    }

    public setPrograms(programs: Program[]): void {
        this.programs = programs;
    }

    // Methods

    public addProgram(program: Program): void {
        if(!isProgramOverlapping(program, this.programs)) {
            this.programs.push(program);
        } else {
            throw new Error("Program is overlapping");
        }
    }

    public removeProgram(program: Program): void {
        const index = this.programs.indexOf(program);
        if (index > -1) {
            this.programs.splice(index, 1);
        }
    }

    public getProgramById(id: number): Program | undefined{
        return this.programs.find(program => program.getId() === id);
    }

    public getProgramByName(name: string): Program | undefined{
        return this.programs.find(program => program.getName() === name);
    }

    public getProgramByDescription(description: string): Program | undefined{
        return this.programs.find(program => program.getDescription() === description);
    }

    public getProgramByConductor(conductor: Person): Program | undefined{
        return this.programs.find(program => program.getConductores().includes(conductor));
    }

    public getProgramByProductor(productor: Person): Program | undefined{
        return this.programs.find(program => program.getProductores().includes(productor));
    }
}