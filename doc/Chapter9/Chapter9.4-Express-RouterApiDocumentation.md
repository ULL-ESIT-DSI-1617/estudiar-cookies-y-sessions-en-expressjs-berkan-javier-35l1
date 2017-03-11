# Router 

Un objeto router es una instancia aislada de middleware y rutas. Es como una "mini-aplicación", capaz sólo de realizar middleware y funciones de enrutamiento. Cada aplicación Express tiene un router de aplicaciones incorporado.

Un router se comporta como el propio middleware, por lo que puede utilizarlo como argumento para app.use() o como argumento para el método use() de otro router.

El objeto express de nivel superior tiene un método Router() que crea un nuevo objeto router.

Una vez que haya creado un objeto router, se pueden agregar rutas intermedias y de método HTTP (como get, put, post, etc.) como una aplicación.

## Methods

**router.all(path, [callback, ...] callback)**

Este método es igual que los métodos router.METHOD(), excepto que coincide con todos los métodos HTTP.

Este método es extremadamente útil para mapear la lógica "global" para prefijos de ruta específicos o coincidencias arbitrarias.

**router.METHOD(path, [callback, ...] callback)** 

Los métodos router.METHOD() proporcionan la funcionalidad de enrutamiento en Express, donde METHOD es uno de los métodos HTTP, como GET, PUT, POST y así sucesivamente, en minúsculas. Por lo tanto, los métodos actuales son router.get(), router.post(), router.put(), y así sucesivamente.

**router.param(name, callback)**

Agrega los disparadores de devolución de llamada a los parámetros de ruta, donde nombre es el nombre del parámetro y la devolución de llamada es la función de devolución de llamada. Aunque el nombre es técnicamente opcional, el uso de este método sin que sea obsoleto empezó a partir de Express v4.11.0.

**router.route(path)**

Devuelve una instancia de una sola ruta que puede utilizar para manejar verbos HTTP con middleware opcional. Utilizer router.route() para evitar la asignación de rutas duplicadas y, por lo tanto, errores de escritura.

**router.use([path], [function, ...] function)**

Utiliza la función o funciones de middleware especificadas, con la ruta de acceso de montaje opcional, cuyo valor predeterminado es "/".

