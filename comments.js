// Create web server and listen to port 3000
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Create a route for comments/:id/put

// Require express
const express = require('express');
const app = express();
const port = 3000;

// Require express-handlebars
const exphbs = require('express-handlebars');

// Require body-parser
const bodyParser = require('body-parser');

// Set the view engine to handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Comments data
const comments = [
  {
    id: 1,
    name: 'John',
    email: '
