function TransactionSummaryController($scope, $state, AccountSummaryService, AuthService) {

  $scope.transactionDetails = {};
  $scope.newTransaction = {};
  $scope.transactionDetails = AccountSummaryService.getTransactionSummary();
  $scope.goBack = function () {
    $state.go("accountsummary", {}, { reload: true });
  }
  $scope.setTransaction=function(newTransaction){
     AccountSummaryService.setTransaction(newTransaction);
     $scope.newTransaction = {};
     $scope.transactionDetails = AccountSummaryService.getTransactionSummary();
  }

  $scope.logout=function(){
    AuthService.logout();
  }
}

export default TransactionSummaryController;