// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 80;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/account", function (req, res) {
    res.sendFile(path.join(__dirname, "account.html"));
});
app.get("/cart", function (req, res) {
    res.sendFile(path.join(__dirname, "cart.html"));
});
app.get("/checkout", function (req, res) {
    res.sendFile(path.join(__dirname, "checkout.html"));
});
app.get("/order", function (req, res) {
    res.sendFile(path.join(__dirname, "order.html"));
});
app.get("/product", function (req, res) {
    res.sendFile(path.join(__dirname, "product.html"));
});
app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "search.html"));
});
app.get("/generic", function (req, res) {
    res.sendFile(path.join(__dirname, "generic.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
