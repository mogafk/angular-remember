//angular.module("myDirective")
angular.module("remember")
    .directive("remember", ['inputStorage', function(inputStorage){
        return {
            scope:{
                "model": "=ngModel", //знанчение модели
                "modelName": "@ngModel" //само название модели
            },
            link: function(scope, elem, attr){
                var selector = scope.modelName;
                var saved = inputStorage.getStorage(selector);

                var value;
                if(value = inputStorage.getValue(selector))
                    scope.model = value;

                scope.$watch("model", function(newVal, oldVal){ //work with checkbox
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