// DEPENDENCIES
const path = require('path');
const router = require('express').Router();

 // ROUTES
  // GET Routes: /notes --> returns notes.html
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET Route: * --> returns index.html
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
  module.exports = router;