var app= angular.module("app",[]);
app.controller('ChoreCtrl',function($scope)
{
$scope.callHome=function(message)
{
    alert(message);
}
}
);
app.directive('phone',function()
    {
return{

    scope:
    {
        dial:"&",

    },
    //template:'<div>{{flavour}}</div>'
    template:'<input type="text" ng-model="value">' +
    '' +
    '<div class="button" ng-click="dial({message:value})">Call Home!</div>'
}
    }
);