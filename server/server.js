var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/checkSPZ', function (req, res) {
   // First read existing users.
    console.log(req.body);
    spz=/^[A-Z]{2}[0-9]{3}[A-Z]{2}/;
    console.log(spz.test(req.body.spz));
    if(spz.test(req.body.spz)){
        res.end("true");
    }else {
        res.end("false");
    }

    res.end();
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("SPZ check", host, port)
})
