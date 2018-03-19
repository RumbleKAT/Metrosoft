const express = require('express');
const http = require('http');

var app = express();
/*
app.get('/user/:id',function(req,res,next){
    console.log(req.params.id);
    res.send('USER');
});
*/
app.get('/user/:id',function(req,res,next){
    if(req.params.id === 0) next('route');
    else next(); //callback 
},function(req,res,next){
    console.log("!!!");
    res.render('regular');
});
/*
app.get('/user/:id',function(req,res,next){
    console.log("@@");
    res.render('special');
});
*/

http.createServer(app).listen(4000, function() {
  console.log("Server is Running in 4000 port");
});