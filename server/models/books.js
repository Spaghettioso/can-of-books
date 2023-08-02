const mongoose = require('mongoose');
const{ Schema } = mongoose;
const bookSchema= new Schema(
    {
        name: String,
        description: String,
        status: Boolean,
    }
);
const Book = mongoose.model('Book',bookSchema);

module.exports = Book;