const express = require('express');
const path = require('path');
const fs = require('fs');
const cons = require('consolidate');

let index = fs.readFileSync(__dirname + '/public/index.html').toString();
let app = express();

app.engine('html', cons.swig)

app.set('view engine', 'html');
app.set('views', __dirname +  '/public');

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/defaultProps', '/addTodo'], (req, res) => {
    res.render('index');
});

app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
