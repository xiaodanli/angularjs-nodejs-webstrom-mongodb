/**
 * Created by dandan on 16-6-29.
 */
var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/product');
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
var  Product = mongoose.model('Product',({name:String}));
var product = new Product({name:'webstorm'});
product.save(function(err){
   if(err){
       console.log(err);
   } else{
       console.log('saved');
   }
});