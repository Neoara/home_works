const express = require('express');
const models = require('../Models')
const laptopsRouter = express.Router();

laptopsRouter.get('/', async (req, res) => {
    const books = await models.Book.find({});
    res.status(200).send(books);
});

laptopsRouter.post('/', async (req, res) => {
    let {name, year, author_fullname} = req.body;

    let newBook = new models.Book({name, year, author_fullname});

    await newBook.save();

    res.status(201 ).send('book added')
});

laptopsRouter.delete('/', async (req, res) => {

});

laptopsRouter.put('/', async (req, res) => {});

module.exports = laptopsRouter;