describe("hello World", function () {
        //set up element we need to test
        var element;
        //Included as on line 14 we need to refrence rootscope
        var $scope;
        //we will use inject so tht we can get compiled version of this expression, inject allows us to use $compiler
        beforeEach(inject(function ($compile, $rootScope) {
                element = angular.element("<div>{{2+2}}</div>>");

                //element=$compile(element)
                //this will fail because the above expression will give it a linking function which nweeds to be invoked by ()
                //now we should again fail as we need to include a rootscope
                $scope = $rootScope;
                element = $compile(element)($rootScope);

            }
        ))
        it("should equal 4", function () {
                $scope.$digest();
                //This is why we should use digest

//Because the the callback attached to the mouseenter event is outside of angular's scope; angular has no idea when that function runs/ends so the digest cycle is never ran.

//Calling $digest or $apply tells angular to update bindings and fire any watches.

                expect(element.html()).toBe("4");
            }
        )
    }
);
