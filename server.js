// DEPENDANCIES
const express = require("express");
const fs = require("fs");
const path = require('path');

// APP / PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTES
// POST route for notes page
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      let userInput = req.body;
      // setting unique ID for each note a user inputs
      userInput.id = Math.floor(Math.random() * 5000);
      notes.push(userInput);
      // writing user input data to db.json file
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        res.json(userInput);
    });
    }); 
  });
  
  // DELETE route for notes page
  app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      const newInput = notes.filter(note => note.id !== parseInt(req.params.id));
    
    // Writing updated data to db.json file
    fs.writeFile('./db/db.json', JSON.stringify(newInput), (err, data) => {
      res.json({msg: 'Success'});
    });
  });
  });
  // GET route for notes by ID
  app.get('api/notes/:id', (req, res) =>{
    res.json(notes[req.params.id]);
  });
  
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      var notes = JSON.parse(data);
      res.json(notes);
    });
  });
  
  app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '/notes.html'))
  });
  
  app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '/index.html'));
  }); 

// START SERVER
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));