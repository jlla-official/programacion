#### LOS ARCHIVOS CON EXTESIÓN .spect.ts , SON PARA HACER PRUEBAS
#### PARA QUE NO SEA OBLIGATORIO INICIAR LAS VARIABLES, HAY QUE PONER `"strictPropertyInitialization": false,` EN tsconfig.json

> Los comandos pueden ponerse en la terminal de visual para hacer más comodo el trabajo

Crear una aplicación (La ruta que hay en la consola, es donde se va a crear nuestra app) :

`ng create NombreAplicación`

Crear un nuevo módulo:

`ng g m NombreModulo`

Crear un nuevo componente:

`ng g c NombreModulo`

Levantar una web para visualizar la aplicación:

`ng serve -o`

## INSTALAR BOOTSTRAP en Angular

En terminal con ubicación del proyecto:

`npm install bootstrap jquery @popperjs/core`

Meter esto en angular.jason :

"styles": [

  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  
  "src/styles.scss",
  
],

"scripts": [

  "node_modules/jquery/dist/jquery.min.js",
  
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  
]
