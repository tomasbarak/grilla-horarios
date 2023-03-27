import { Program } from "../../models/Program";

export const isProgramOverlapping = (program: Program, programs: Program[]): boolean => {
    const { dayOfWeek, startTime, endTime } = program;
    const overlappingPrograms = programs.filter(p => p.getDayOfWeek() === dayOfWeek && p.getId() !== program.getId());
    return overlappingPrograms.some(p => {
        const { startTime: pStartTime, endTime: pEndTime } = p;
        return (pStartTime <= startTime && startTime < pEndTime) || (pStartTime < endTime && endTime <= pEndTime);
    });
}