/**
 * @filesource : formjs.js
 * @author : Shabeeb  <me@shabeebk.com>
 * @abstract : controller fo HTML page
 * @package sample file 
 * @copyright (c) 2014, Shabeeb
 * shabeebk.com
 * 
 *  */
var app = angular.module('formExample', []);


app.controller("formCtrl", ['$scope', '$http', function($scope, $http) {
    $scope.url = 'submit.php';

    $scope.formsubmit = function(isValid) {


        if (isValid) {


            $http.post($scope.url, { "name": $scope.name, "email": $scope.email, "message": $scope.message }).
            success(function(data, status) {
                console.log(data);
                $scope.status = status;
                $scope.data = data;
                $scope.result = data; // Show result from server in our <pre></pre> element
            })
        } else {

            alert('Form is not valid');
        }


    }




}]);