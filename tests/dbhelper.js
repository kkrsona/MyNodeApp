
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://starz:password@ds129776.mlab.com:29776/rambo', (err, database) => {
  if (err) 
    return 
   console.log("unable to connect to the DB")
  
})

