# Socket.IO
Test Técnico - Ingeniarte Group

Aplicación en tiempo real usando NodeJS y libreria Socket.IO

## Descripción

Los ususarios pueden leer un documento colaborativamente. Esto significa que si un usuario hace scroll en su pantalla a los demás usuarios se les deberia hacer scroll en la pantalla exactamente en la misma posición.

## Como usarlo?
* Abre una consola y te posicionate en la carpeta de la aplicación

* Instala la dependencia de desarrollo nodemon, *(en caso de no tenerla instalada como global)* con el comando:  

  ``` npm install nodemon ```

* Instala todas las depencencias de la aplicación con el comando:

  ``` npm install```
  
* Ejercuta la aplicación con el comando:
  
  ``` npm start```
 
* Abre el navegador y en distintas ventanas escribe la siguiente ruta: 

  ```http://localhost:8080```
  
  Al hacer scroll deberias ver que la posición del **scrollbar** se ve reflejada en las otras ventanas y viceversa.
  Al abrir una nueva ventana si ya hay otra abierta esta se sincronizará a la posición de la ventana anterior.
  >Para correr la aplicacion en distintas computadoras se debera modificar el codigo del **cliente.js** en la primera linea, cambiando _localhost_ por el numero de ip del servidor donde esta corriendo la aplicacion
  
    ```var socket = io.connect('IP DEL SERVIDOR:8080');```
  >En el navegador ingresar con el numero de ip y el puerto
  
    ```http://IP DEL SERVIDOR:8080```
  
## Error

La aplicación por ahora tiene un error que cuando las pantallas estan abiertas simultaneamente y se hace scroll hay una especie de desenfoque por unos instantes.

