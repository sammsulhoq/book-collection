const mongoose = require("mongoose");

function connect() {
    mongoose.connect("mongodb://localhost/book-collection", { useNewUrlParser: true})
            .then(() => console.log("Connected to database..."))
            .catch(() => console.log("Error connecting database..."));
}

module.exports = connect;