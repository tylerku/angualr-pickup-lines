angular.module('Formula', [])
.controller('Ctrl', function($scope){
	$scope.showSubmit = true
	$scope.showStepButton = false
	$scope.showBadAnswer = false
	$scope.submitButtonText = 'I promise I am telling the truth'
	$scope.stepsHeader = 'Perfect! It\'s easy, just follow these simple steps'
	$scope.stepButtonText = 'Next Step'
	$scope.badAnswerButtonText = 'I want to rethink my life'
	$scope.answer = ''
	$scope.step1 = "1. Throw something near her on the ground."
	$scope.step2 = "2. Go pick up the object."
	$scope.step3 = "3. Trip and fall into her arms."
	$scope.step4 = "4. Marry her."
	$scope.steps = [$scope.step1, $scope.step2, $scope.step3, $scope.step4]
	$scope.shownSteps = []
	$scope.submitResponse = function() {
		if ($scope.answer != 'Yes' && $scope.answer != 'No') {
			alert('Answer must be "Yes" or "No"')
			return
		}
		if ($scope.answer === 'No') {
			$scope.showBadAnswer = true
		} else {
			$scope.showStepButton = true
			$scope.shownSteps.push($scope.steps[0])
		}
		$scope.showSubmit = false

	}
	$scope.showNextStep = function() {
		if ($scope.shownSteps.length >= 4) {
			$scope.resetState()
			return
		} else if ($scope.shownSteps.length == 3) {
			$scope.stepButtonText = "From the top"
		}
		$scope.shownSteps.push($scope.steps[$scope.shownSteps.length])
	}
	$scope.resetState = function() {
		$scope.shownSteps = []
		$scope.showStepButton = false
		$scope.showBadAnswer = false
		$scope.showSubmit = true
		$scope.answer = ''
		$scope.stepButtonText = 'Next Step'
	}

})
