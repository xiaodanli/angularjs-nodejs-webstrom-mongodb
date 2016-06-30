/**
 * Created by dandan on 16-6-29.
 */
var express = require('express');
var app = express();
var cors = require('cors'); //处理跨域请求的
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/product');
var Product = mongoose.model('Product',{name:String});
app.get('/',function(req,res){
    Product.find(function(err,products){
        res.send(products);
    });
});
app.post('/add',function(req,res){
    var name = req.body.name;
    var product = new Product({name:name});
    product.save(function (err) {
       res.send();
    });
});
app.listen(3000);