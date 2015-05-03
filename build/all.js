var app = angular.module("remember", []);
//angular.module("myDirective")
angular.module("remember")
    .controller("mainCtrl", ['$scope', function($scope){
        $scope.test = "some text";
        $scope.testCheckbox = false
        $scope.specialValue = "spec";
              //testCheckbox

        //console.log($scope);
        console.log($scope)
        console.log($scope.$$watchers)
        //for(key in $scope)
        //    console.log(key);
        $scope.colors = [
            {name:'black', shade:'dark'},
            {name:'white', shade:'light', notAnOption: true},
            {name:'red', shade:'dark'},
            {name:'blue', shade:'dark', notAnOption: true},
            {name:'yellow', shade:'light', notAnOption: false}
        ];
    }])
//angular.module("myDirective")
angular.module("remember")
    .factory("inputStorage", ['localStorage', function(localStorage){
        var storage = localStorage("inputs");
        var saved = storage._getFromLocalStorage();

        var save = {
            getValue: function(selector){
                if(!saved[selector])
                    false;
                return saved[selector];
            },
            changeValue: function(selector, value) {
                saved[selector] = value;
                storage._saveToLocalStorage(saved);
            },
            getStorage: function (selector){
                //if(saved == undefined)
                    //saved = storage._getFromLocalStorage();
                if(selector in saved){
                    return saved;
                }

                saved[selector] = false;
                return saved;
            }
        };
        return save;
    }])
//angular.module("myDirective")
angular.module("remember")
    .factory("localStorage", function(){
        var STORAGE_ID;
        return function(id){
            STORAGE_ID = id;
            return {
                _getFromLocalStorage: function(){
                    console.log("id", STORAGE_ID);
                    return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
                },
                _saveToLocalStorage: function(inputs){
                    localStorage.setItem(STORAGE_ID, JSON.stringify(inputs))
                }
            }
        }
    })

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