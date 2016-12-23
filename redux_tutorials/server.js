const express = require('express');
const cons = require('consolidate');
const path = require('path');
const fs = require('fs');

let app = express();

app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/favicon.ico', express.static('/favicon.ico'));

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', path.join(__dirname + '/views'));

app.get(['/', '/counter'], (req, res) => {
    res.render('index');
})

app.listen(3000);

console.log("server's running on 3000");
