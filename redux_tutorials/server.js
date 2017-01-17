const express = require('express');
const cons = require('consolidate');
const path = require('path');
const fs = require('fs');
const pdf = require('html-pdf');
const http = require('http');
var request = require('request');

var bodyParser     =        require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/favicon.ico', express.static('/favicon.ico'));

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', path.join(__dirname + '/views'));

app.get(['/', '/counter', '/avoid_mutation'], (req, res) => {
    console.log(req);
    res.render('index');
});

app.get('/events', (req, res) => {
    console.log(req);
    res.render('events');
});


app.get('/pdf', (req, res) => {
    // phantom.create().then(function(ph) {
    //     ph.createPage().then(function(page) {
    //         page.open("localhsot:3000/avoid_mutation").then(function(status) {
    //             page.render('avoid_mutation.pdf').then(function() {
    //                 console.log('Page Rendered');
    //                 ph.exit();
    //             });
    //         });
    //     });
    // });


    // var client = http.request({
    //             port: 3000,
    //             hostname: 'localhost',
    //             path: 'www.google.com:80'
    //         });

    // client.on('response', function( res ) {
    //     res.on('data', function( data ) {
    //         console.log( data.toString());
    //     } );
    // } );
    // client.end();
   function htmlBody(body) {
       console.log(body);

        return body;
    }
    let b = '';
    request('http://localhost:3000/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);

            pdf.create(body).toStream(function(err, stream){
                stream.pipe(fs.createWriteStream('./foo966.pdf'));
            });
            res.send(body)
             // Show the HTML for the Google homepage.
        }
    });
})

app.listen(3000);

console.log("server's running on 3000");
