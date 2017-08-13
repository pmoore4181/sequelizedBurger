// dependencies ================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// declare port ================================================
var app = express();
app.set('port', (process.env.PORT || 8000));

// use public ==================================================
app.use(express.static("public"))

// method override =============================================
app.use(methodOverride("_method"));

// handlebars ==================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser =================================================
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes and give the server access to them. ===========
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

// Listen ======================================================
app.listen(app.get('port'), function() {
    console.log("Listening on port " + app.get('port'));
});