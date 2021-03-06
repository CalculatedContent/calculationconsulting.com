'use strict';

app.controller('MainCtrl', function ($scope, $http, $location)
{
	$scope.isActive = function(route)
	{
        var isactive = (route === $location.path());
		return isactive;
    }

	$scope.email = '';
	$scope.showThankYou = false;

	$scope.emailRegister = function()
	{
		var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		if(!EMAIL_REGEXP.test($scope.email))
		{
			return;
		}

		var url = 'http://calculatedcontent.com/q.php?email=' + $scope.email;

		$http.get(url).success(
			function(data, status)
			{
			}
		);
				$scope.showThankYou = true;
	}
});
