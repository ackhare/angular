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
    $scope.loadMoreTweets= function()
    {
        alert('load more tweets');
    }
});
app.directive("enter",function()
{
return function(scope,element,attrs)
    {element.bind("mouseenter",function() {
        //console.log('mmmmmmmmmmmmmmmmmmmmmmm');
        scope.loadMoreTweets();
        //So above is probably not the best way because yu dont kbow the scope yu are using inside here is the same scope yu have the method on
        //and yu are not sure at this place that whether enter directive binds to appctrl controller
        //so u wanto keep seperate controller and directive by passing in what yu want to use in the enter directive
        // so we in template give partametre to enter directive
        //scope.$apply('loadmoretweets()')
       // $apply is a service that angular provides now the string that is there will be parsed and find it on the  scope
       //and then invoke it so it wrks simlarly

      //we can also use it like
         scope.$apply(attrs.enter)

        //so whatever we pass in enter it will take nice seperation of concerns

    });
    }
});