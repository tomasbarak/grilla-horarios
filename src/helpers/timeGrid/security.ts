import { Program } from "../../models/Program";

export const isProgramOverlapping = (program: Program, programs: Program[]): boolean => {
    const dayOfWeek = program.getDayOfWeek();
    const startTime = program.getStartTime();
    const endTime = program.getEndTime();
    const overlappingPrograms = programs.filter(p => p.getDayOfWeek() === dayOfWeek && p.getId() !== program.getId());
    return overlappingPrograms.some(p => {
        const pStartTime = p.getStartTime();
        const pEndTime = p.getEndTime();
        return (pStartTime <= startTime && startTime < pEndTime) || (pStartTime < endTime && endTime <= pEndTime);
    });
}