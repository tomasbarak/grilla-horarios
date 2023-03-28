import { TimeGrid } from "../models/TimeGrid";

export class TimeGridController {
    private timeGrids: TimeGrid[] = [];

    public getTimeGrids(): TimeGrid[] {
        return this.timeGrids;
    }

    public getTimeGrid(id: number): TimeGrid | undefined {
        return this.timeGrids.find((timeGrid) => timeGrid.id === id);
    }

    public setTimeGrids(timeGrids: TimeGrid[]): void {
        this.timeGrids = timeGrids;
    }

    public addTimeGrid(timeGrid: TimeGrid): void {
        this.timeGrids.push(timeGrid);
    }

    public updateTimeGrid(timeGrid: TimeGrid): void {
        const index = this.timeGrids.findIndex((timeGrid) => timeGrid.id === timeGrid.id);
        this.timeGrids[index] = timeGrid;
    }

    public deleteTimeGrid(id: number): void {
        const index = this.timeGrids.findIndex((timeGrid) => timeGrid.id === id);
        this.timeGrids.splice(index, 1);
    }
}