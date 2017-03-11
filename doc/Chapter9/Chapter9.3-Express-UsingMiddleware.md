# Usando Middleware

Express es un framework web de enrutamiento y middleware, que tiene una funcionalidad característica propia: Una aplicación Express es, fundamentalmente, una serie de llamadas a función middleware. 

Las funciones middleware son funciones que tienen acceso a los objetos de tipo petición(req), a los objetos de tipo respuesta(res), y la siguiente función de middleware en el ciclo solicitud respuesta de la aplicación. La siguiente función middleware es comunmente next.

Las funciones middleware pueden llevar a cabo las siguientes tareas:
* Ejecutar cualquier código.
* Hacer cambios en los objetos de tipo petición y respuesta.
* Terminar el ciclo petición-respuesta.
* Llamar a la siguiente función middleware.

Si la actual función middleware no termina el ciclo petición-respuesta, debe llamar a la función next() para pasar el control a la siguiente función middleware. De otra forma, la petición se quedará colgada.

Una aplicación Express puede utilizar los siguientes tipos de middleware:
* A nivel de aplicación.
* A nivel de router.
* Manipulación de errores.
* Middleware integrado.
* Middleware de terceros.

## Middleware a nivel de aplicación

Se puede vincular el middleware de nivel de aplicación a una instancia del objeto de aplicación(app object) usando las funciones `app.use()` y `app.METHOD()`, donde METHOD es el método HTTP para las peticiones que la función middleware maneja(como GET, PUT o POST) en minúscula.

## Middleware a nivel de router

Este tipo de middleware funciona de forma similar al middleware a nivel de aplicación, pero con la diferencia de que está enlazado a una instancia de **express.Router()**.

## Middleware para manipulación de errores

A la hora de definir este tipo de middleware se hace de la misma manera que el resto de funciones middleware, pero se le pasan cuatro argumento en vez de tres, de la siguiente manear (err, req, res, next).

## Middleware integrado

A partir de la versión 4.x, Express no depende de Connect. Con la excepción de express.static, todas las funciones middleware que anteriormente fueron incluidas con Express están ahora separadas en modulos. 

La única función middleware integrada en Express es express.static. Esta función esta basada en serve-static, y es responsable de proporcionar activos estáticos como archivos HTML, imágenes, etc.

## Middleware de terceros

Se utilizan para añadir funcionalidad a las aplicaciones Express. 

Instala el modulo Node.js para la funcionalidad requerida, luego cargala en tu aplicación en el nivel de aplicación o en el nivel de router.