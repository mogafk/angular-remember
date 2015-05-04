angular.module("remember")
    .factory("inputStorage", ['localStorage', function(localStorage){
        var storage = localStorage("inputs");
        var saved = storage._getFromLocalStorage();

        var save = {
            /**
             * Возвращает значение по селектору или создает ключ
             * с пустым значением в обьекте saved
             * @param {String} selector имя модели
             * @returns {String|Boolean} либо значение модели,
             * либо false в случае, если значения нет
             */
            getValue: function(selector){
                if(!saved[selector])
                    false;
                return saved[selector];
            },
            /**
             * Меняет значения по селектору и сохраняет их в localStorage
             * @param {String} selector имя модели, которое выступает
             * ключом для обьекта saved
             * @param {String} value значение модели
             */
            changeValue: function(selector, value) {
                saved[selector] = value;
                storage._saveToLocalStorage(saved);
            },
            /**
             * Если ключ в существует в saved, то возращает
             * saved. В противном случае создает пару ключ-значение
             * как модель-false
             * @param {String} selector имя модели
             * @returns {Object} saved то, что хранится в localStorage
             */
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