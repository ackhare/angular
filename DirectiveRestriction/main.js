var app = angular.module('app', []);
app.directive("supermanAttr", function() {
    return {
        restrict: "A",
        link: function(){
            console.log('I m a attribute');
        }
    }
});
app.directive("supermanElement", function() {
    return {
        restrict: "E",
        link: function(){
            console.log('I m a element');
        }
    }
});
//comment part is still not working
app.directive("welcome", function() {
    return {
        restrict: "M",
        link: function(){
            console.log('I m a comment');
        }
    }
});
app.directive("supermanClass", function() {
    return {
        restrict: "C",
        link: function(){
            console.log('I m a class');
        }
    }
});

