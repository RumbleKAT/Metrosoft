const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const fsManager = require('./fsManager');
const bodyParser = require('body-parser');


var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.get("/get",function(req,res){
    const getData = fsManager.readFile(req.query.load,req.query.dir);
    res.send(getData);
});

app.get("/",function (req , res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

http.createServer(app).listen(8000,function(){
    console.log("Server is Running in 8000 port");
});