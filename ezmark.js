angular.module('angular-ezmark', [])
    .directive('ezmark', function() {
        return {
            restrict: 'EA',
            link: function($scope, element) {
                $(element).ezMark();

                $scope.$watch(function() {
                    return element.prop('checked');
                }, function() {
                    $(element).change();
                });
            }
        };
    })
;
