# Readme
##  General
### Introduccion
La idea es hacer un sistema gastronomico similar al del trabajo. Que genere y edite mesas y mozos, con un sistema de comandas para cada mesa.
En cuanto que hace el programa actualmente:
Crea mesas que tienen un mozo y una comanda genérica
### Guía de inicio
1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Inicia el servidor de desarrollo con `ng serve -o`
### Estructura
mvp
- src
|-- app
|--|-- core
|--|--|-- services
|--|--|--| drawer.service.ts
|--|--|--| mesas.service.ts
|--|-- features
|--|--|-- dialogs
|--|--|--| dialog-base
|--|--|--| mesa-dialog
|--|--|-- mesa(3)
|--|--|-- mesa-info(3.1)
|--|--|--| buscador(3.1.1)
|--|--|-- panel(0 contenedor principal)
|--|--|-- salon(2)
|--|--|-- sidenav(1)
|--|-- shared
|--|--|-- colors.scss
|--|--|-- shared.module.ts
|--|-- app.component.html/scss/ts
|--|-- app.config.ts
|--|-- app.routes.ts
|-- env
|-- models
|--|-- interface.ts
|-- index.html
|-- main.ts
|-- style.scss




##  Tecnica
- 10/1
- El programa ahora se conecta a la base de datos de json-server
- Pide las mesas por get y puede editar la comanda desde mesa-info
- Lo que queda hacer ahora es:
1. Crear y eliminar mesas (conectarlo a la bbdd)
2. Que la comanda calcule el total y para renderizarlo en la plantilla html
3. Alguna que otra funcionalidad relacionada con las mesas y las comandas (¿?)
4. Estilizar
5. Lo siguiente es el CURD a la bbdd con los productos (no hay HUD para esto)
### Archivos Importantes
#### mesas.service.ts
Este servicio gestiona las mesas del sistema y las almacena en un `BehaviorSubject`, permitiendo actualizaciones reactivas en los componentes suscriptos.
- **`CRUD`**
  CRUD para las mesas

- **`actualizarPosicion(numero: number, posicion: {x: number, y: number}): void`**  
  Actualiza la posición de una mesa específica.  
  - **Parámetros**:  
    - `numero`: Número de la mesa.  
    - `posicion`: Coordenadas `{x, y}` de la nueva posición.  
  - **Retorna**: `void`.
#### drawer.service.ts
El componente principal `panel` tiene dentro al componente `sidenav` que sin este servicio, el sidenav no podria funcionar, por lo cual no se podria ver el menu de opciones donde se crean las mesas
#### bbdd.service.ts
  es la conexion a la base de datos de json-server
### Variables de entorno
Por ahora no tenemos :p
# Readme generado x Angular
## Mvp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
