// DEPENDANCIES
const express = require("express");
const fs = require("fs");
const path = require('path');

// APP / PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// ROUTES
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js/index.js')(app);

// START SERVER
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));