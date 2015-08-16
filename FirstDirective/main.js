var app = angular.module('app', []);
app.directive("superman", function() {
    return {
        restrict: "A",
        link: function(){
            console.log('I m a attribute');
        }
    }
});
