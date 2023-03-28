export class Persona{

//Forma 1 de crear los atributos de clase y un constructor para iniciarlizarla

    /*
    nombre : string = '';
    apellido : string = '';

    constructor(nombre : string, apellido : string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
*/

//Forma 2 de crear los atributos de clase y un constructor para iniciarlizarla

    constructor(public nombre : string, public apellido : string){
        
    }
}