angular.module("remember")
    .directive("remember", ['inputStorage', function(inputStorage){
        return {
            scope:{
                "model": "=ngModel", //знанчение модели
                "modelName": "@ngModel", //само название модели
                "remember": "=remember"
            },
            link: function(scope, elem, attr){
                var selector = scope.modelName;
                var saved = inputStorage.getStorage(selector);

                var value;
                if(value = inputStorage.getValue(selector))
                    scope.model = value;
                if(!!scope.remember){
                    scope.model = scope.remember[value];
                }


                scope.$watch("model", function(newVal, oldVal){
                    if(!!scope.remember){
                        var newVal = scope.remember.indexOf(newVal);
                        inputStorage.changeValue(selector, newVal);
                    }else
                        inputStorage.changeValue(selector, newVal);
                }, true)

                //elem.on("change", function(){ //work with input type text
                //    console.log("on change emit and value =", elem.val());
                //    console.log("on change emit and value =", scope.model);
                    //inputStorage.changeValue(selector, indx, scope.model);
                //})
            }
        };
}])