var express = require("express");
var session = require("express-session");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(session({secret: "codingdojorocks"}));

app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {

  response.render("index", {counter: countByOne(request)});
})

app.post("/add-two", function (request, response) {
  countByOne(request);

  response.redirect("/");
})

app.post("/reset", function (request, response) {
  request.session.destroy();
  response.redirect("/");
})


function countByOne(request) {
  return request.session.counter = request.session.counter ? request.session.counter + 1 : 1;

}

app.listen(8080, function () {
  console.log("listen on port 8080");
});
