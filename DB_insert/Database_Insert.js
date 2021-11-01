//var express = require('express');
//var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "questions";


var myobj = [
{
    _id:0001,
    question:"Which American inventor is generally given credit for the invention of the lightning rod?",
    option1: "Nikola Tesla",
    option2: "George Washington",
    option3: "Benjamin Franklin",
    option4: "Elijah McCoy",
    answer: "3"
  },
  { _id:0002,
    question: "Jimmy Carter was the first U.S. president born in a what?",
    option1: "Air Plane",
    option2: "Hospital",
    option3: "Submarine",
    option4: "Island",
    answer: "2"
  }
];








for (let i = 0; i < Object.keys(myobj).length; i++) {
    //console.log(myobj[i])
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);  
            dbo.collection(mycollection).insertOne(myobj[i], function(err, res) {
                if (err) throw err;
                console.log("\n\n1 document inserted\n\n");
                db.close();
            });            
         
        
    });
}


        

//module.exports = router;
