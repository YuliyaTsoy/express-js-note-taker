// DEPENDANCIES
const express = require("express");
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

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
app.use(apiRoutes);
app.use(htmlRoutes);

// START SERVER
app.listen(PORT, () => console.log(`App listening on port ${PORT}🚀`));
