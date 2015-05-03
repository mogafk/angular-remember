//angular.module("myDirective")
angular.module("remember")
    /*
    @param {
     */
    .factory("localStorage", function(){
        var STORAGE_ID;
        /**
         * Возвращает обьект с двумя методами для сохранения
         * и считывания значения localStorage с (де)сериализацией
         * @param {String} ключ для localStorage
         */
        return function(id){
            STORAGE_ID = id;
            return {
                /**
                 * Возвращает десериализованную строку по ключу id из
                 * localStorage. Ключ сохраняется в замыкании
                 * @private
                 * @return {Object|Array|'{}'}
                 */
                _getFromLocalStorage: function(){
                    console.log("id", STORAGE_ID);
                    return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
                },
                /**
                 * Сериазилует обьект и записывает его в localStorage по ключу
                 * id, что сохраняется в замыкании
                 * @param {Object|Array} inputs
                 * @private
                 */
                _saveToLocalStorage: function(inputs){
                    localStorage.setItem(STORAGE_ID, JSON.stringify(inputs))
                }
            }
        }
    })
