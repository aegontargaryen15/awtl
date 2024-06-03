angular.module('complaintApp', [])
.controller('ComplaintController', function($scope) {
    $scope.complaint = {};

    $scope.submitComplaint = function() {
        if ($scope.complaintForm.$valid) {
            alert('Complaint submitted successfully!');
            $scope.complaint = {};  // Reset form after submission
            $scope.complaintForm.$setPristine();
            $scope.complaintForm.$setUntouched();
        } else {
            alert('Please fill out the form correctly.');
        }
    };
});

