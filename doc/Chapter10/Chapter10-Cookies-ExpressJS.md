# Gestión de Cookies en Express

Las cookies son pequeñas cantidades de datos que se envían desde la web y se almacenan en el navegador web del usuario mientras este se encuentra navegando en dicho sitio web. Cada vez que el usuario carga el sitio web de nuevo, el navegador envía los datos almacenados a la página web o un servidor, para distinguir la actividad previa del usuario.

Se utilizan principalmente para estos tres propósitos:

* La administración de sesiones (inicios de sesión de usuario, carritos de la compra, etc.)
* Personalización (preferencias del usuario)
* El seguimiento (análisis de comportamiento de los usuarios)

## Set - Cookies

El Set-Cook se utiliza para enviar las cookies desde el servidor al agente de usuario.

Cuando se recibe una petición HTTP, un servidor puede enviar una Set-Cookie con la respuesta. La cookie se almacena generalmente por el navegador y, después, el valor de la cookie se envía junto con cada solicitud realizada al mismo servidor que el contenido de una Cookie.

El Set-Cookieencabezado de respuesta HTTP se utiliza para enviar las cookies desde el servidor al agente de usuario. Una cookie sencilla se puede establecer la siguiente manera:

```javascript
Set-Cookie: <cookie-name> = <cookie-valor>
```

Además del par nombre=valor existen otras directivas opcionales como: Expires=<-date->, Max-Age=<-zero-digit->, Domain=<-domain-value->, Path=<-path-value->.

## Cookie Parser

Para hacer uso de la cookies tenemos que hacer uso del cookieParser, dependencia que debemos instalar mediante:

```bash
$ npm install cookie-parser
```

Una vez instalado debemos importar cookie parser en nuestra aplicación:

```javascript
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
```

Cookie-parser analiza el encabezado de Cookie y rellena req.cookies con un objeto marcado con los nombres de las cookies. Para establecer una nueva cookie podemos definir una nueva ruta en tu aplicación express como:

```javascript
app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});
```
