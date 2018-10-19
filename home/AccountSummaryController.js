function AccountSummaryController($scope, $http, $state, AccountSummaryService, AuthService) {

  $scope.accountSummary = {};
  $scope.accountSummary = AccountSummaryService.getAccountSummary();
  //console.log($scope.accountSummary);
  $scope.viewTransaction = function () {
    $state.go("transactionSummary", {}, { reload: true });
  }
  $scope.goBack = function () {
    $state.go("home", {}, { reload: true });
  }
  $scope.logout=function(){
    AuthService.logout();
  }
}

export default AccountSummaryController;