const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tableData = [
    {
        name: "Joe",
        phoneNumber: "123",
        email: "joe@joe.com",
        id:"1"
    }
];
let waitlistData = [
    {
        name: "Bob",
        phoneNumber: "456",
        email: "bob@joe.com",
        id:"2"
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Pages/index.html"))
});
app.get("/resform", function (req, res) {
    res.sendFile(path.join(__dirname, "Pages/resform.html"))
});

app.get("/api/tables", function(req, res) {
    res.send(tableData);
});

app.get("/api/waitlist", function(req, res) {
    res.send(waitlistData);
});

app.get("/api/clear", function(req,res){
    tableData = [];
    waitlistData = [];
    res.send("Data cleared");
});

app.post("/api/tables", function(req, res){
    let hasTable = false;
    if(tableData.length<5){
        tableData.push(req.body);
        hasTable = true
    } else {
        waitlistData.push(req.body)
    }
    res.json(hasTable)
})

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



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});