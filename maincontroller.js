/**
 * 
 */

app.controller('MainController', function($scope){ 
	$scope.people = [
	    { id: 0, name: 'Leon', music: [ 'Rock', 'Metal', 'Dubstep', 'Electro' ], live: true },
	    { id: 1, name: 'Chris', music: [ 'Indie', 'Drumstep', 'Dubstep', 'Electro' ], live: true },
	    { id: 2, name: 'Harry', music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal' ], live: false },
	    { id: 3, name: 'Allyce', music: [ 'Pop', 'RnB', 'Hip Hop' ], live: true }
	];
	$scope.newPerson = null;
	$scope.isLive = null;
	$scope.musicTypes = [
		'Rock', 
		'Metal',
		'Thrash Metal',
		'Hip Hop'
	];
	$scope.selectedMusicTypes = [];
	$scope.addNew = function() {
		if ($scope.isLive === 'true') {
			$scope.isLive = true;
		} else {
			$scope.isLive = false;
		}
	
		if ($scope.newPerson !== null && $scope.newPerson !== '') {
			$scope.people.push({
				id:$scope.people.length, 
				name:$scope.newPerson,
				live:$scope.isLive,
				music:$scope.selectedMusicTypes
			});
		}
	}
});