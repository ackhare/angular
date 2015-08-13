var app=angular.module('app', []);
app.factory('Data',function()
{
    return {message:'hi hi'}
});
app.controller('FirstCtrl', function($scope, Data){
    $scope.data=Data;
});
//movingh message and its dependency inside the function is again easier to test
app.controller('SecondCtrl', function($scope, Data){
    $scope.data=Data;
    $scope.reversifiy=function(message)
    {
     console.log(message+"____________");
      return  message.split("").reverse().join("");
    }
});