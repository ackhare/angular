var app=angular.module('app', []);
app.factory('Avengers',function()
{
    var Avengers={};
    Avengers.cast=
        [
            {
                name:'pirhana',
                date:'23-4-2015'
            },
            {
                name:'anil',
                date:'23-4-2013'
            },
            {
                name:'caroll',
                date:'23-4-2013'
            }
        ];
    return Avengers;
});
////fist function iwill handle wht we want to inject into that
//app.filter('reverse',function(Data)
//    {
// return function(text)
// {
//return text.split("").reverse().join("")+Data.message;
// }
//    }
//);
app.controller('AvengersCtrl', function($scope, Avengers){
    console.log(Avengers.cast);
    $scope.Avengers=Avengers;
});
