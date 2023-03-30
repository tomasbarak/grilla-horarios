import { Program } from "../models/Program";
import { TimeGrid } from "../models/TimeGrid";

export class TimeGridController {
    private timeGrids: TimeGrid[] = [];

    public getTimeGrids(): TimeGrid[] {
        return this.timeGrids;
    }

    public getTimeGrid(id: number): TimeGrid | undefined {
        return this.timeGrids.find((timeGrid) => timeGrid.getId() === id);
    }

    public setTimeGrids(timeGrids: TimeGrid[]): void {
        this.timeGrids = timeGrids;
    }

    public addTimeGrid(timeGrid: TimeGrid): void {
        this.timeGrids.push(timeGrid);
    }

    public updateTimeGrid(timeGrid: TimeGrid): void {
        const index = this.timeGrids.findIndex((tg) => tg.getId() === timeGrid.getId());
        this.timeGrids[index] = timeGrid;
    }

    public deleteTimeGrid(id: number): void {
        const index = this.timeGrids.findIndex((timeGrid) => timeGrid.getId() === id);
        this.timeGrids.splice(index, 1);
    }

    public addProgramToTimeGrid(timeGridId: number, program: Program): void {
        const timeGrid = this.getTimeGrid(timeGridId);
        if (timeGrid) {
            timeGrid.addProgram(program);
        }
    }
}