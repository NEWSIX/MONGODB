//var express = require('express');
//var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "questions";


var questions = [
  { _id : 01 ,
    question:"Which American inventor is generally given credit for the invention of the lightning rod?",
    option1: "Nikola Tesla",
    option2: "George Washington",
    option3: "Benjamin Franklin",
    option4: "Elijah McCoy",
    option5: "https://www.rollingstone.com/wp-content/uploads/2019/06/phum-Viphurit.jpg",
    answer: "3"
  },
  { _id : 02,
    question: "Jimmy Carter was the first U.S. president born in a what?",
    option1: "Air Plane",
    option2: "Hospital",
    option3: "Submarine",
    option4: "Island",
    answer: "2"
  },
  {_id :03 ,
    question:"In Disney's 'The Little Mermaid' what is the name of the human that Ariel falls in love with?",
    option1: "King George",
    option2: "Barry White",
    option3: "Olaf The Snowman",
    option4: "Prince Eric",
    answer: "4"
  },
  {_id :04 ,
    question:
      "What is the name of the animated science fiction comedy-drama film released in 2002 about a Hawaiin girl and her unusual pet?",
    option1: "Lilo & Stitch",
    option2: "Moana",
    option3: "How To Train Your Dragon",
    option4: "Coraline",
    answer: "1"
  },
  {_id :05,
    question: "How many mother sauces are there in classical French cuisine?",
    option1: "Twenty",
    option2: "Two",
    option3: "Five",
    option4: "Nine",
    answer: "3"
  },
  {_id :06,
    question:
      "The original Starbucks was established in 1971 in what U.S. city?",
    option1: "Los Angeles, California",
    option2: "Orlando, Florida",
    option3: "Seattle, Washington",
    option4: "Dallas, Texas",
    answer: "3"
  },
  {_id :07,
    question: "What do the letters in the acronym CD-ROM stand for?",
    option1: "Compact Disk Recorded On Memory",
    option2: "Compact Disk Read Only Memory",
    option3: "Who Cares We Have DvD's Now!",
    option4: "Compact Disk Ready On Memory",
    answer: "2"
  },
  {_id :08,
    question:"In 1975 an engineer created the first electronic camera while working for what company?",
    option1: "Microsoft",
    option2: "IBM",
    option3: "Polaroid",
    option4: "Kodak",
    answer: "4"
  },
  {_id : 09, 
    question:"Nintendo is a consumer electronics and video game company founded in what country?",
    option1: "China",
    option2: "South Korea",
    option3: "Japan",
    option4: "United States",
    answer: "3"
  },
  {_id :10,
    question:
      "Which planet in our solar system has an axis that is titled by 98 degrees?",
    option1: "Uranus",
    option2: "Saturn",
    option3: "Mars",
    option4: "Mercury",
    answer: "1"
  }
];


for (let i = 0; i < Object.keys(questions).length; i++) {
    //console.log(myobj[i])
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);  
            dbo.collection(mycollection).insertOne(questions[i], function(err, res) {
                if (err) throw err;
                console.log("\n\n1 document inserted\n\n");
                db.close();
            });            
         
        
    });
}

var mycollection = "movie";


var data = [
  { _id : 01 
    ,name: "阿yueyue"
    ,date: "1995年6月17日"
    ,age:26
    ,pic:"https://p2.music.126.net/X-cZXMriax_IRAkKWTOozg==/109951165575050379.jpg"
  },
  { _id : 02 
    ,name: "Rira Ikuta"
    ,date: "September 25, 2000"
    ,age:21
    ,pic:"https://cdn.myanimelist.net/images/voiceactors/3/63662.jpg"
  },
  { _id : 03 
    ,name: "Aimyon"
    ,date: "March 6, 1995"
    ,age:26
    ,pic:"https://i.pinimg.com/550x/4e/28/f3/4e28f35748960c013b6e5e92bc6641ae.jpg"
  }
];


for (let i = 0; i < Object.keys(data).length; i++) {
    //console.log(myobj[i])
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);  
            dbo.collection(mycollection).insertOne(data[i], function(err, res) {
                if (err) throw err;
                console.log("\n\n1 document inserted\n\n");
                db.close();
            });            
         
        
    });
}
        

//module.exports = router;
