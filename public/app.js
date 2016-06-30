var app = angular.module('myapp',[]);
app.controller('AppCtrl',function($http,$scope){
    var url = 'http://localhost:3000';
    $scope.saveProduct=function(newProduct){
        $http.post(url+'/add',{name:newProduct}).success(function(){
            loadProduct();
        });
    }
    function loadProduct() {
        $http.get(url).success(function (products) {
            $scope.products = products;
        });
    }
    loadProduct();
});
