var express = require('express');
var app = express();
app.get('/', function(request, response) {
  response.send("<h1>Hello World</h1>");
})



app.get('/users', function (request, response) {
  var users_arr = [
    {name: "Kevin", email: "kevin@gmail.com"},
    {name: "David", email: "david@gmail.com"},
    {name: "Ken", email: "ken@gmail.com"},
    {name: "De", email: "de@gmail.com"}
  ]
  response.render('users', {users: users_arr});
})




app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));


app.listen(8000, function () {
  console.log('listening on port 8000');
});
