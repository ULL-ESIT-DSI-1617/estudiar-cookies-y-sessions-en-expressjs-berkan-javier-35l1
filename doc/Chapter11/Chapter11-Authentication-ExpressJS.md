# Autenticación en node.js usando express.js


Antes de comenzar a explicar el procedimiento de autenticación en node.js hay que tener claros dos conceptos:

* La **autenticación** es el proceso de verificar si un usuario es, de hecho, el usuario que ha dicho ser. 

* La **autorización** es el proceso de determinar si el usuario tiene los privilegios necesarios para acceder a los recursos que ha solicitado. 

El siguiente fragmento de código node.js muestra un ejemplo muy básico del proceso de autenticación y autorización usando el módulo session de express.js. Hay un punto final de inicio de sesión, un punto final de cierre de sesión y obetener página de entrada. Para ver la página de entrada, primero hay que iniciar sesión, y la identidad del usuario será verificada y guardada en la sesión. Cuando el usuario cierra la sesión, su acceso será negado eliminando su identidad de la sesión.

# El código paso a paso  

Primero importamos los módulos `express` y `express-session`. Después creamos express app y añadimos la sesión a express app como un middleware.

```javascript
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUnitialized: true
}));
```

**Función middleware para autenticación y autorización**. Permite el siguiente paso si el usuario es 'amy' y si tiene acceso de administrador. Estos valores son solo para esta demostración. Una aplicación web real obtendrá el usuario y su nivel de acceso de la sesión, y comprobará el usuario y su nivel de acceso en un base de datos del servidor. 

```javascript
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
```

**localhost:3000/login?username=amy&password=amyspassword**, la url de inicio de sesión para comprobar el inicio de sesión del usuario guardando el usuario y su nivel de acceso en una sesión. La sesión será diferente para cada usuario, y también única para el mismo usuario usando diferentes navegadores. Para el ejemplo, usamos una petición get y le pasamos la información mediante parámetros query. Un aplicación web real usaría una petición post y pasaría los datos en forma post. En el ejemplo también vemos que el usuario y la contraseña están codificados. En un aplicación real se comprobaría el usuario y la contraseña en una base de datos en el servidor. 

```javascript
// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});
``` 

**localhost:3000/logout**, cierra la sesión eliminandola. Una vez la sesión es elminada, el usuario tiene que introducir la url de inicio de sesión otra vez para conseguir acceso a recursos protegidos. 

```javascript
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
```

**localhost:3000/content**, obtiene los contenidos protegidos. La función de autenticación se pasa como segundo parámetro del middleware antes de que proceda a enviar el contenido al usuario. Si la función de autenticación determina que el usuario no es válido, no ejecuta la tercera función para enviar el contenido. 

```javascript
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
```

Por último, escuchar en el puerto 3000.

```javascript
app.listen(3000);
console.log("app running at http://localhost:3000");
```

# Ejecutando el código 

Primero guardar cada paso en un fichero session_auth.js.

Para ejecutar el código:

```bash
npm install express
npm install express-session
node session_auth.js &
```

Escribir en el navegador: 
* localhost:3000/content
* localhost:3000/login?username=amy&password=amyspassword
* localhost:3000/content
* localhost:3000/logout
* localhost:3000/content
