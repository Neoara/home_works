const schemas = require('./Schemas');
const mongoose = require("mongoose");

const Book = new mongoose.model("Book", schemas.BookSchema);


module.exports = {
    Book
};