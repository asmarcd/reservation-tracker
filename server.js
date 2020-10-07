const express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Welcome to the restaurant!");
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
