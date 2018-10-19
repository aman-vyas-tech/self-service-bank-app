import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

import AccountSummaryController from './AccountSummaryController';
homeModule.controller('AccountSummaryController', AccountSummaryController);

import TransactionSummaryController from './TransactionSummaryController';
homeModule.controller('TransactionSummaryController', TransactionSummaryController);

//Services 
import AuthService from './AuthService';
homeModule.service('AuthService', AuthService);

import AccountSummaryService from './AccountSummaryService';
homeModule.service('AccountSummaryService', AccountSummaryService);

export default homeModule;