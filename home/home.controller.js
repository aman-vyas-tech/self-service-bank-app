function HomeCtrl($scope, $state, AuthService) {

  $scope.user = {};
  $scope.loginUser = function (user) {
    $scope.loginResult = AuthService.loginUser(user);
    $scope.user = {};
    if($scope.loginResult && $scope.loginResult===true){
          $state.go("accountsummary",{},{reload:true});
    }
  }
}

export default HomeCtrl;