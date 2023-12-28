# Express.js: Note Taker

## About the application:

Note Taker is an application that can be used to write and save notes. It uses an Express.js back end and saves and retrieve note data from a JSON file.

The application’s front end and back end are connected and deployed to Heroku.

[Heroku Deployment Link](https://dashboard.heroku.com/apps/express-js-note-taker706)

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Built With

- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- - Express.js
- - Uniqid

## Installation

Run below command in your terminal to install all the necessary packages:

```
npm i
```

Then open terminal and run the server using following command:

```
node server
```

## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/note-taker-demo.gif)
