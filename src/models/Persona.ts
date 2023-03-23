export class Persona {
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

    getNombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }

    getEdad() {
        return this.edad;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setApellido(apellido: string) {
        this.apellido = apellido;
    }

    setEdad(edad: number) {
        this.edad = edad;
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}