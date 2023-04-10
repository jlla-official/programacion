import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

/*Los servicios son como las librerías en Java, si se inyectan desde el constructor en la clase que las vamos a usar, podemos acceder a sus métodos y propiedades.
Ver ejemplos en el componente formulario.component.ts*/

export class PersonasService{

    personas : Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Laura', 'Juarez')
    ];


    agregarPersona(persona : Persona){
        this.personas.push( persona );
    }
}
