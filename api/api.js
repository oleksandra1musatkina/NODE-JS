let express = require('express');
let app = express();

let bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
    extended: true
}));

app.post('/checkAPI', function (req, res) {
    console.log(req.body);
    api=/^\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
    console.log(api.test(req.body.spz));
    if(api.test(req.body.api)){
        res.end("true");
    }else {
        res.end("false");
    }

    res.end();
})

let server = app.listen(3007, function () {
   let host = server.address().address
   let port = server.address().port
   console.log("API check", host, port)
})
