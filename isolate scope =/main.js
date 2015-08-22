var app= angular.module("app",[]);
app.controller('ChoreCtrl',function($scope)
{
$scope.ctrlFlavour='blackberry';
}
);
app.directive('drink',function()
    {
return{

    scope:
    {
        flavour:"=",

    },
    //template:'<div>{{flavour}}</div>'
    template:'<input type="text" ng-model="flavour">'
}
    }
);