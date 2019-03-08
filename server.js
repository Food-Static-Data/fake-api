const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()
const db = require('./app/config/db')

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/routes')(app, {})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, '0.0.0.0', function () {
    console.log('Listening on Port' + port)
  })
}

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
module.exports = app
