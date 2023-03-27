import { Component } from "@angular/core";

@Component({
    selector: 'app-persona',
    templateUrl: 'persona.component.html',
    styleUrls: ['persona.component.css'],
})

export class PersonaComponent{

    private nombre: string = 'Juan';
    private apellido: string = 'Perez';
    private edad: number = 28;

    public getNombre() : string{
        return this.nombre;
    }

    public getApellido() : string{
        return this.apellido;
    }

    public getEdad() : number{
        return this.edad;
    }

}