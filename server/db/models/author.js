const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
   name: { type: String, required: true },
   age: { type: Number, required: true } 
});

const Author = mongoose.model("author", authorSchema);

module.exports.Author = Author;