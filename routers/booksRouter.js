const express = require('express');
const models = require('../Models')
const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
    const books = await models.Book.find({});
    res.status(200).send(books);
});

booksRouter.post('/', async (req, res) => {
    let {name, year, author_fullname} = req.body;

    let newBook = new models.Book({name, year, author_fullname});

    await newBook.save();

    res.status(201 ).send('book added')
});

module.exports = booksRouter;