var app=angular.module('app', []);
app.factory('Data',function()
{
    return {message:'hi hi'}
});
//fist function iwill handle wht we want to inject into that
app.filter('reverse',function(Data)
    {
 return function(text)
 {
return text.split("").reverse().join("")+Data.message;
 }
    }
);
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