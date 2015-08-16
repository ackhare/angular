var app=angular.module('app', []);
//app.factory('Data',function()
//{
//    return {message:'hi hi'}
//});
////fist function iwill handle wht we want to inject into that
//app.filter('reverse',function(Data)
//    {
// return function(text)
// {
//return text.split("").reverse().join("")+Data.message;
// }
//    }
//);


app.controller('AppCtrl', function($scope){
    console.log($scope);
});
app.directive("enter",function()
{
return{
  scope:{},
  link:function(scope)
  {
      console.log(scope);
  }
    }
});