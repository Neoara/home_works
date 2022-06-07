const epxress = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routers/productsRouter');

const app = epxress();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', productsRouter);

const CONNECTION_STRING = "mongodb+srv://Neoara:Good99girl@cluster0.zewatul.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, (err) => {
    if(err) return console.log(err);
    app.listen(8080, () => {
        console.log('server works')
    });
});