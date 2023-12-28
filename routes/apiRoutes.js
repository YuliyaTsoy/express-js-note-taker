// DEPENDENCIES
const path = require("path");
const fs = require("fs");
const db = require("../db/db.json");
const uniqid = require("uniqid"); // npm package creating unique Ids
const router = require("express").Router();

// GET Route: /api/notes --> reads the db.json file and returns saved notes as JSON.
router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    res.send(data);
  });
});

// POST Route: /api/notes --> receives new note to save on the req.body
// Adds the new note to db.json file, and returns it to the client.
router.post("/api/notes", (req, res) => {
  let newNote = {
    id: uniqid(),
    title: req.body.title,
    text: req.body.text,
  };
  // reads db.json file
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    // parsing data
    let newData = JSON.parse(data);
    // pushing new Note
    newData.push(newNote);
    // writing new Data to db.json
    fs.writeFile("./db/db.json", JSON.stringify(newData), (err) => {
      if (err) throw err;

      res.send("Note has been added successfully");
    });
  });
});

// DELETE Route: /api/notes/:id --> receives a query parameter with id to be deleted
router.delete("/api/notes/:id", (req, res) => {
  // reading notes in db.json
  let db = JSON.parse(fs.readFileSync("db/db.json"));
  // deleting note with id
  let deleteNotes = db.filter((item) => item.id !== req.params.id);
  // rewriting updated notes to db.json
  fs.writeFileSync("db/db.json", JSON.stringify(deleteNotes));
  res.json(deleteNotes);
});

module.exports = router;
