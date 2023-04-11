import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent {

  /*Con @Input(), la variable persona e indice estan disponibles para modificar su valor desde el html del componente padre, 
  en este caso app.component.html*/ 

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService : PersonasService){}

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }
  
}
