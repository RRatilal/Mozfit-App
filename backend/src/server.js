const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const path = require('path');

const { routes } = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mozfit_2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);
app.listen(3333)