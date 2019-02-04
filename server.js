const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db = require('./app/config/db');
const port = 8004;


app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});


app.listen(port, () => {
  console.log('We are live on ' + port);
});


// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// })

// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//
//   // Make sure you add the database name and not the collection name
//   db = database.db("note-api")
//   require('./app/routes')(app, db);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// })
