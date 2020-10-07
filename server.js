const express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Welcome to the restaurant!");
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });
  
  // Displays a single character, or returns false
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
