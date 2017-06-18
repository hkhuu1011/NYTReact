// Dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";

// Require Articles Schema
import Article from "./models/Article";

// Initialize Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("public"));

//-----------------------------------------------------------

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytreact");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//----------------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {
    Article.find({}).sort (
        ["date", "descending"]
    ).limit(10).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});


// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.post("/api", function(req, res) {
    console.log("Article: ", req.body.title);
	Article.create({
		title: req.body.title,
		date: Date.now(),
		url: req.body.url
	}, function(err) {
	    if (err) {
	        console.log(err);
        } else {
	        res.send("Saved Search");
        }
    });
});


// Listen on port 3000
app.listen(PORT, function() {
    console.log("App running on port 3001!");
});