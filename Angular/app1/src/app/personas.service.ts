import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

/*Los servicios son como las librerías en Java, si se inyectan desde el constructor en la clase que las vamos a usar, podemos acceder a sus métodos y propiedades.
Ver ejemplos en el componente formulario.component.ts*/

/*En este servicio de Personas, estamos instanciando el servicio LogginService, de esta manera, cuando llamemos al servicio Personas, también podemos llamar
al servicio LogginService sin tenerlos que llamar por separado.

Para hacer esto, hay que colocar el decorador @Injectable() que hay debajo
*/
@Injectable()
export class PersonasService{

    personas : Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Laura', 'Juarez')
    ];

    saludar = new EventEmitter<number>();

    constructor(private logginService : LogginService){}

    agregarPersona(persona : Persona){
      this.logginService.enviaMensajeAConsola("agregamos persona:" + persona)
      this.personas.push( persona );
    }
}
