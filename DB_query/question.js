var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "movie";



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { name:/.*m*/};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result[0]);
      db.close();
    });
  });


/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
  var cursor = db.collection(mycollection).find();
        cursor.each(function(err, item) {
            console.log(item);
    if(item == null) {
        db.close();
        return;
    }
    });
});
*/