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
        $scope.colors2 = [
            'black',
            'white',
            'red',
            'blue',
            'yellow'
        ];
    }])