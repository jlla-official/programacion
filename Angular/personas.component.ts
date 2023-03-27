import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: 'personas.component.html',
    //styleUrls: ['personas.component.css']
    styles: [`
        h1{
            color: blue;
        }
    `]
})

export class PersonasComponent {
    deshabilitar : boolean = false;
    mensaje : string = 'No se ha agregado ninguna persona';
    titulo : string = 'Ingeniero';
    mostrar : boolean = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada'
    }

    /*Con este método, recibimos como argumento desde el html, 
    la palabra $event que sirve para capturar el valor de un 
    input text
    
    Usamos el .target para referenciar a la etiqueta input en 
    la que se encuentra el atributo que recibimos como argumento

    Para poder acceder al valor, tenemos que convertir el atributo
    de tipo Event a tipo input para poder acceder a su valor
    hay que colocar delante el <HTMLInputElement>
  
    modificarTitulo(miAtributo : Event){
        this.titulo = (<HTMLInputElement>miAtributo.target).value;
    }

    */
}