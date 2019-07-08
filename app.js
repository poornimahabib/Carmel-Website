var mysql = require("mysql");
var express = require('express');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd",
    database: "CarmelWebsite"
})
conn.connect(function (err) {
    if (err) throw err;
    else console.log("connected")
})


var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/ui', express.static(__dirname + '/ui'));
app.use('/views', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
})

app.post('/save-email', function (req, res) {
    var data = JSON.parse(req.body._data);
    if(data.phone_num===''||data.phone_num==='undefined'){
        data.phone_num=0;
    }
    console.log(data)
    conn.query('INSERT INTO Users SET ?', data, function (err, result, fields) {
        if (err) {
            var retValue = {
                "success": "false",
                "error": err
            }
            res.send(retValue);
        } else {
            var retValue = {
                "success": "true",
                "error": null,
                "result": result
            }
            res.send(retValue);
        }
    });
})

app.listen(3000);