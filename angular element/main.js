var app= angular.module("app",[]);
app.directive('dumbPassword',function()
    {
        var validElement=angular.element("<div>{{model.input}}</div>");
        return{
            restrict : 'E',
            template : "<div>\n <input type=\'text\' ng-model=\'model.input\' >\n </div>  <div>{{model.input}}</div>",
            compile  : function(tElem)
            {

                tElem.append(validElement);
            //compile will compile the eleent and also return it will give the scope
                //Also we r giving the scope and we can access validElement
                return function(scope,element)
            {
                scope.$watch("model.input",function(value)
                    {
                        if(value === 'password')
                        {
                            validElement.toggleClass("alert-box alert");
                        }
                    }

                )
            }
        }
    }}
);