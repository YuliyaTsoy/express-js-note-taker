// DEPENDENCIES
const path = require('path');
const html = require('express').Router();

 // ROUTES
  // GET Routes: /notes --> returns notes.html
  html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET Route: * --> returns index.html
  html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
  module.exports = html;