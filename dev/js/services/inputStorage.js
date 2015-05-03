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