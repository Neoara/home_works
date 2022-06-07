const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    year: Number,
    author_fullname: String
});

module.exports = {
    BookSchema
};