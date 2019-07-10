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
// app.get("/all", function (req, res) {
//     res.sendFile(path.join(__dirname, "all.html"));
// });

// // Displays all characters
// app.get("/api/characters", function (req, res) {
//     return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newcharacter);

//     characters.push(newcharacter);

//     res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
