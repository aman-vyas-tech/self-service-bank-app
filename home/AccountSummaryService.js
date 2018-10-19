function AccountSummaryService($http) {

  var transactionSummary = [{
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }, {
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }, {
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }, {
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }, {
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }, {
    "amount": 100.00,
    "fromaccount": 37373787654,
    "toaccount": 37373787654,
    "description": "Deposit",
    "type": "credit"
  }];

  var accountSummary=[
    {
      "account": 37373787654,
      "type": "Savings",
      "branch": "NY",
      "name": "Aman Vyas",
      "balance": 14521
    },
    {
      "account": 37373787654,
      "type": "Savings",
      "branch": "NY",
      "name": "Aman Vyas",
      "balance": 14521
    },
    {
      "account": 37373787654,
      "type": "Savings",
      "branch": "NY",
      "name": "Aman Vyas",
      "balance": 14521
    },
    {
      "account": 37373787654,
      "type": "Savings",
      "branch": "NY",
      "name": "Aman Vyas",
      "balance": 14521
    }];


  return {
    getTransactionSummary: function () {
      // $http.get('accountSummary.json').then(function (response) {
      //   console.log(response);
      //return response.data;
      //};

      return transactionSummary;
    },
    getAccountSummary: function(){
      return accountSummary;
    },
    setTransaction: function(newTransaction){
      transactionSummary.push(newTransaction);
    }
    
  }

}

export default AccountSummaryService;