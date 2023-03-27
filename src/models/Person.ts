export class Person {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;

    constructor(id: number, nombre: string, apellido: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }
}