import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LogginService]

})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();
  
  /*
  Como en el formulario.component.html hemos usado el término de local reference, mirar el código allí. Ahorramos el tener que declarar variables para almacenar
  el contenido de un input, por eso está entre comentarios nombreInput y apellidoInput. Sin embargo, haciendo esto, solo podemos extraer el valor de los input,
  porque no hay variables creadas y porque no se está usando el ngModel
  */

  //nombreInput : string = '';
  //apellidoInput : string = '';


  //Con ViewChild estamos asignando el identificador del input a una variable de la clase con el nombre que queramos, su sintáxis debe ser como abajo
  @ViewChild('nombreInput') nombreInput : ElementRef;
  @ViewChild('apellidoInput') apellidoInput : ElementRef;

  /*A través del concepto Dependency Injection, angular crea una instancia de la clase LogginService que hemos creado, para poder interactuar con ella.
  También, arriba, en la parte de @Component, debemos crear otro atributo llamado providers, y pasarle entre corchetes la clase que hemos creado para este concepto.
  Si queremos que todas las clases puedan usar el servicio que queramos, tenemos que hacer lo de providers: [LogginService], en la clase de app-module.ts
  */

  constructor(private loginService : LogginService,
    private personasService : PersonasService){}

  /*
    FORMA 1 DE EXTRAER EL VALOR DE UN INPUT (Local Reference)
    (Al asignar a una variable el tipo HTMLInputElement, podemos acceder posteriormente a una serie de métodos como en este caso, el .value)

    agregarPersona(nombreInput : HTMLInputElement, apellidoInput : HTMLInputElement){
      let persona1 = new Persona(nombreInput.value, apellidoInput.value);
      
      //this.personas.push( persona1 );
      
      this.personaCreada.emit(persona1); 
    }
  */
    
    //FORMA 2 DE EXTRAER EL VALOR DE UN INPUT (ViewChild)
    onAgregarPersona(){
      let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
      //Aquí abajo en loginService, estamos usando la clase que hemos instanciado en el constructor, para su método, así como una libreria.
      this.loginService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);      
      //this.personaCreada.emit(persona1); 
      this.personasService.agregarPersona(persona1);
    }
}
