import { Program } from "../models/Program";


export class ProgramController {
    private programs: Program[];

    constructor() {
        this.programs = [];
    }

    public getProgram(id: number) {
        return this.programs.find(program => program.getId() === id);
    }

    public setPrograms(newPrograms: Program[]) {
        this.programs = newPrograms;
    }

    public getPrograms() {
        return this.programs;
    }

    public addProgram(program: Program) {
        this.programs.push(program);
    }

    public updateProgram(program: Program) {
        const index = this.programs.findIndex(p => p.getId() === program.getId());
        if (index === -1) {
            return;
        }

        this.programs[index] = program;
    }

    public deleteProgram(id: number) {
        const index = this.programs.findIndex(p => p.getId() === id);
        if (index === -1) {
            return;
        }

        this.programs.splice(index, 1);
    }

}
