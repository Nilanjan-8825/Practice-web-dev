const express = require("express");
const body_parser=require("body-parser");
const path = require("path");
const app=express();
app.use(body_parser.urlencoded({extended:true}));
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
});
app.post('/', function(req, res) {
    let n1=Number(req.body.num1);
    let n2=Number(req.body.num2);
    n1+=n2;
    res.send("Your Result is :"+ n1);
});
app.listen(3000);