export class Person {
    private id: number;
    private nombre: string;
    private apellido: string;
    private edad: number;

    constructor(id: number, nombre: string, apellido: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getEdad(): number {
        return this.edad;
    }

    // Setters
    public setId(id: number): void {
        this.id = id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }
}