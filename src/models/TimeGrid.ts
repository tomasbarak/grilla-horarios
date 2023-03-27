import { Person } from "./Person";
import { Program } from "./Program";
import { isProgramOverlapping } from "../helpers/timeGrid/security";
export class TimeGrid {
    id: number;
    programs: Program[];

    constructor(id: number, programs: Program[]) {
        this.id = id;
        this.programs = programs;
    }

    // Getters

    getId(): number {
        return this.id;
    }

    getPrograms(): Program[] {
        return this.programs;
    }

    // Setters

    setId(id: number): void {
        this.id = id;
    }

    setPrograms(programs: Program[]): void {
        this.programs = programs;
    }

    // Methods

    addProgram(program: Program): void {
        if(!isProgramOverlapping(program, this.programs)) {
            this.programs.push(program);
        } else {
            throw new Error("Program is overlapping");
        }
    }

    removeProgram(program: Program): void {
        const index = this.programs.indexOf(program);
        if (index > -1) {
            this.programs.splice(index, 1);
        }
    }

    getProgramById(id: number): Program | undefined{
        return this.programs.find(program => program.getId() === id);
    }

    getProgramByName(name: string): Program | undefined{
        return this.programs.find(program => program.getName() === name);
    }

    getProgramByDescription(description: string): Program | undefined{
        return this.programs.find(program => program.getDescription() === description);
    }

    getProgramByConductor(conductor: Person): Program | undefined{
        return this.programs.find(program => program.getConductores().includes(conductor));
    }

    getProgramByProductor(productor: Person): Program | undefined{
        return this.programs.find(program => program.getProductores().includes(productor));
    }
}