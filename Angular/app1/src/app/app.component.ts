import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  titulo = 'Listado de Personas';

  personas : Persona[] = [];

  //Aquí estamos inyectando nuestros servicios (librerias?), para poder usar sus atributos y métodos
  constructor(private loginService : LogginService,
              private personasService : PersonasService){

  }
  //Con ngOnInit, hacemos que al levantar la app, se ejecute este método
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  

}
