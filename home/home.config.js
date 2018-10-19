function HomeConfig($stateProvider) {
  'ngInject';

  
  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    //controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  }).
  state('accountsummary', {
    url: '/accountsummary',
    controller: 'AccountSummaryController',
    templateUrl: 'home/accountSummary.html'
  }).
  state('transactionSummary', {
   url: '/transactionSummary',
   controller: 'TransactionSummaryController',
   templateUrl: 'home/transactionPage.html'
  });

};

export default HomeConfig;