# Almundo.com angular2 app
author: Juan Ignacio Aldama
mail: juan.choy@gmail.com

## Installation
1. Instal node(6.10)
2. from the project folder run "npm install"
## Usage

1. npm run build-prod
2. npm run serve 
3. http://localhost:3000/hoteles/madrid

#Formato de la URL de la applicacion 
Interprete la consigna de la entrega como un sitio que se navega del siguiente modo
http://localhost:3000/hoteles/madrid
```
http://localhost:3000 > host/server addr
|-- hoteles > feature/modulo
|   |-- madrid > destination (o itemId/permalink)
|      
```
hoteles: seria la seccion de hoteles o el feature / modulo "hoteles" 
madrid : el id / permalink a la que la api apunta , es el dato que le envio a la api 
para que me mande la informacion especifica de esa destination.

nota : Solo hay datos provistos para la destination "madrid"

#Project structure
```
almundo.com
|-- app
|   |-- components
|   |   |-- main-container
|   |   |   |-- filter-bar
|   |   |   |   |-- filter-bar.component.ts
|   |   |   |   |-- filter-bar.scss
|   |   |   |   `-- filter-bar.template.html
|   |   |   |-- header
|   |   |   |   |-- header.component.ts
|   |   |   |   |-- header.scss
|   |   |   |   `-- header.template.html
|   |   |   |-- list
|   |   |   |   |-- list.component.ts
|   |   |   |   |-- list.scss
|   |   |   |   `-- list.template.html
|   |   |   |-- list-container
|   |   |   |   |-- list-container.component.ts
|   |   |   |   |-- list-container.scss
|   |   |   |   `-- list-container.template.html
|   |   |   |-- services
|   |   |   |   |-- models
|   |   |   |   |   `-- hotels.ts
|   |   |   |   `-- hotels.service.ts
|   |   |   |-- main-container.component.ts
|   |   |   |-- main-container.module.ts
|   |   |   `-- main-container.template.html
|   |   `-- shared
|   |       |-- filters
|   |       |-- star
|   |       `-- shared.module.ts
|   |-- fonts
|   |-- media
|   |-- app.module.ts
|   |-- app.route.ts
|   |-- index.html
|   |-- main.scss
|   |-- main.ts
|   `-- vendor.ts
|-- dist
|-- server
|    |-- controllers
|    |   `-- api.hotels.controller.js
|    |-- models
|    |   `-- hotels.model.js
|    |
|    `-- index.js
|-- README.md
|-- package.json
|-- webpakconfig.js
|-- tsconfig.json
```
#comments
- Con mas tiempo podria haber hecho una aplicacion isomorfica lo que daria un mejor rendimiento en tiempos de 
- carga (la primera carga) y evitaria el uso de servicios como prerender lo cual es necesario por los crawlers
- para que puedan leer el contenido de la pagina renderizado
- tambien lo mismo con respecto a los test unitarios de cada componente y la api