var app= angular.module("app",[]);
app.controller('ChoreCtrl',function($scope)
{
$scope.logChore=function(chore)
{
    alert(chore+ 'is down');
}
}
);
app.directive('kid',function()
    {
     return {
         restrict : 'E',
         //individualkl scope to a directive
         scope: {

             done:'&'
         },
         template:'<input type="text" ng-model="chore">{{chore}}' +
         ' <div class="button" ng-click="done({chore:chore})">I am done!</div>'
         //so when done will be invoked then it actually invoke logchore
     }
    }
);