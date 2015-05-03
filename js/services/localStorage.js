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
