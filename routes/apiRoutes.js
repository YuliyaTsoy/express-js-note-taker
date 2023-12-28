// DEPENDENCIES
const path = require('path');
const fs = require('fs');
const uniqueId = require('uniqid'); // npm package creating unique Ids
const api = require('express').Router();

// GET Route: /api/notes --> reads the db.json file and returns saved notes as JSON.
api.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST Route: /api/notes --> receives new note to save on the req.body
  // Adds the new note to db.json file, and returns it to the client. 
  api.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    // creating note object
    let inputNote = {
      title: req.body.title,
      text: req.body.text,
      // creating unique id for each note
      id: uniqueId(),
    };
    // pushing the note and writing it in the db.json file
    db.push(inputNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });

  // DELETE Route: /api/notes/:id --> receives a query parameter with id to be deleted
  api.delete('/api/notes/:id', (req, res) => {
    // reading notes in db.json
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // deleting note with id
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // rewriting updated notes to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })

module.exports = api;