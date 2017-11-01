var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url);

  if (request.url === '/') {
    fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/car.png') {
    fs.readFile('./images/car.png', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/cat.png') {
    fs.readFile('./images/cat.png', 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(contents);
      response.end();
    })
  }
// create a new car
else if(request.url === '/cars/new') {
  fs.readFile('.views/newCar.html', 'utf8', function (errors, contents) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(contents);
    response.end();
  })
}


  else {
        response.end('File not found!!!');
    }
});


server.listen(7077);
console.log("Running in localhost at port 7077");
