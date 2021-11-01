var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "movie";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    dbo.collection(mycollection).findOne({}, function(err, result) {
      if (err) throw err;
      console.log("\n\n########\n\n");
      console.log(result);
      console.log("\n\n########\n\n");
      db.close();     
    });
});