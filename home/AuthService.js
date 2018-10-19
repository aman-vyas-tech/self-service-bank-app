function AuthService($state){

  var loginUser =function(loginData, $state){
      console.log("Login Service Called");
      if(loginData && loginData.username==='test' && loginData.password==='test'){
        return true;
      }
      else{
        return false;
      }

  }

 var logout=function(){
   console.log("Logging Out");
   $state.go("home", {}, {reload: true});

 }

  return {
    loginUser: loginUser,
    logout: logout
  }
}

export default AuthService;