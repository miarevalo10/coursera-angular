(function () {
'use strict';

angular.module("LunchApp",[])

.controller("LunchCtrl", LunchCtrl);

LunchCtrl.$inject = ['$scope'];

function LunchCtrl($scope){

  $scope.inputTxt = "";
  $scope.msg = "";
  $scope.color ="";

  $scope.checkTooMuch = function() {
      var countItems = count($scope.inputTxt);

      if ($scope.inputTxt=="") {
        $scope.msg = "Please enter data first";
        $scope.color = "red";
      }

      else{
        $scope.msg = (countItems<4) ? "Enjoy": "Too much!";
        $scope.color = "green";
      }
  }

  function count(string){

    var re = /\s*,\s*/;
    var arrayOfStrs = string.split(re);

    // to make sure "" is not part of arrayOfStrs
    var index = arrayOfStrs.indexOf("");
    console.log(index);
    while (index > -1) {
      arrayOfStrs.splice(index, 1);
      index = arrayOfStrs.indexOf("");
    }

    console.log(string);
    console.log(arrayOfStrs);
    console.log(arrayOfStrs.length);
    return arrayOfStrs.length;

  }

}



})();
