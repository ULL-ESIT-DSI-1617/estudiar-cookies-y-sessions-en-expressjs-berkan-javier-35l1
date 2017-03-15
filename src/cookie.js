var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
var cookie_name = 'super cookie'

let instructions = `
Visit these urls in the browser:
<ul>
  <li> <a href="http://localhost:3000/showcookie">localhost:3000/showcookie</a> </li>
  <li> <a href="http://localhost:3000/setcookie">localhost:3000/setcookie</a> </li>
  <li> <a href="http://localhost:3000/clearcookie">localhost:3000/clearcookie</a> </li>
</ul>
`;

let layout = function(x) { return x+"<br />\n"+instructions; };

app.use(cookieParser());

app.get('/', function(req, res) {
  res.send(instructions);
});

app.get('/showcookie', function(req, res){
    console.log("Cookies: ", req.cookies);
});

app.get('/setcookie',function(req, res){
    res.cookie(cookie_name, 'You got a super cookie').send('Cookie is set');
});

app.get('/clearcookie', function(req, res){
     res.clearCookie('super cookie');
     res.send('Cookie deleted');
});

app.listen(3000);
console.log("app running at http://localhost:3000");
