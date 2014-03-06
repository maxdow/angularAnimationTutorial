/* global angular */
"use strict";

/**
* app Module
*
* Description
*/
angular.module("myApp", ["ngAnimate"])
.controller("CarouselCatCtrl",function($scope,$timeout){
    $scope.catList = ["chat1","chat2","chat3"];

    var i = 0 ;

    function updateImage(){
        if(i===$scope.catList.length-1){
            i=0;
        } else {
            i++;
        }

        $scope.elementEnCours = $scope.catList[i];
        $timeout(updateImage,3000);
    }
    updateImage();
});