### PROYECTO APLICANDO MQTT AL IOT

Ejemplo de implementación del protocolo MQTT para el IOT

 - `broker.js` se encarga de recibir las peticiones de un publicador y las enviar a los correspondientes suscriptores.
 - `publisher.js / publisher2.js` se encarga de enviar peticiones al broker.js
 - `suscriber.js` se encarga de escuchar las peticiones que realizan los publisher a determinado topics  

 ### INSTALACIÓN

 - Clonar el repositorio

 - Para ejecutar el programa primero hay que importar los módulos correspondientes a través de los siguientes comandos 

 `$ npm install` ó `$ npm i`

 - para correr el broker ejecuta

 `$ node src/broker.js`

 - para correr los publisher ejecutar

 `$ node src/publisher.js`

 `$ node src/publisher2.js`

 - para corres el suscriptor ejecutar

 `$ node src/suscriber.js`
