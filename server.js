const express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Welcome to the restaurant!");
});

// form page/make reservation page GET
// tableNum, customerId, customerName, customerEmail, customerPhone

// waitList page POST
// customerId, customerName, customerEmail, customerPhone

var reservation = [
    {
        tableNum: 1,
        customerId: "123",
        customerName: "Mario",
        customerEmail: "mario@email.com",
        customerPhone: "123-123-1234"
    },
    {
        tableNum: 2,
        customerId: "456",
        customerName: "Luigi",
        customerEmail: "luigi@email.com",
        customerPhone: "456-456-4567"
    }
];

var waitList = [];

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


app.post("/resform", function(req, res) {
    reservation.push(res)
    console.log(res);
    res.json(reservation);
  });

