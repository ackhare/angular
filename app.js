/**
 * Created by chetan on 12/8/15.
 */
angular.module('app',['ui.router']).
    config(function config($stateProvider)
    {
        $stateProvider.state("index",{
            url:"",
            controller:"FirstCtrl as first",
            templateUrl:"templates/first.html"
        })
        $stateProvider.state("second",{
            url:"/second",
            controller:"SecondCtrl as second",
            templateUrl:"templates/second.html"
        })

    })
    .service("greeting",function Greeting()
    {
    var greeting=this;
    greeting.message="Hi";
    }
).
    controller('FirstCtrl',function FirstCtrl(greeting)
    {
        var first=this;
        //did this to handle js scoping issues

        first.greeting=greeting;
        console.log(first.greeting)
    }
).
    controller('SecondCtrl',function SecondCtrl(greeting)
    {
        var second=this;
        //did this to handle js scoping issues
        console.log(greeting);
        second.greeting=greeting;
        console.log(second.greeting);
        console.log(second.greeting.message);

    }
)


;
