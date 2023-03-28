import { Program } from "../models/Program";

let programs: Program[] = [];

export const programController = {
    getProgram: (id: number) => {
        return programs.find(program => program.id === id);
    },

    setPrograms: (newPrograms: Program[]) => {
        programs = newPrograms;
    },

    getPrograms: () => {
        return programs;
    },

    addProgram: (program: Program) => {
        programs.push(program);
    },

    updateProgram: (program: Program) => {
        const index = programs.findIndex(p => p.id === program.id);
        if (index === -1) {
            return;
        }

        programs[index] = program;
    },

    deleteProgram: (id: number) => {
        const index = programs.findIndex(p => p.id === id);
        if (index === -1) {
            return;
        }

        programs.splice(index, 1);
    }

}
