var app= angular.module("app",[]);
app.controller('ChoreCtrl',function($scope)
{
$scope.ctrlFlavour='blackberry';
}
);
app.directive('drink',function()
    {
return{
    template:'<div>{{flavour}}</div>',
    //Now we
    //link:function (scope)
    //{
    //    scope.flavour='cherry';
    //}
    //now if we want that to pick up some value from the template
    //link:function (scope,element,attrs)
    //{
    //    scope.flavour=attrs.flavour;
    //}

    ////so strawberry comes

    // so what @ really does is that it takes thev attribute and pass it as
    // string as attr.flavour  and automatically assign it to the scope

    scope:
    {
        flavour:"@",

    },

    template:'<div>{{flavour}}</div>>'
}
    }
);