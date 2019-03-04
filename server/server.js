let express = require('express');
let app = express();

let bodyParser = require('body-parser')
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({  
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

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   console.log("SPZ check", host, port)
})
