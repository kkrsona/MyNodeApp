const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

//Read form data and parse it to extract date from the form

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
 })

app.use(bodyParser.urlencoded({extended: true}))

//MongoDB connection string
//Start app only if the database is up
var db

MongoClient.connect('mongodb://starz:password@ds129776.mlab.com:29776/rambo', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3010, () => {
    console.log('im listening on 3010')
  })
})

//write form data to the database
app.post('/quotes', (req, res) => {

  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
