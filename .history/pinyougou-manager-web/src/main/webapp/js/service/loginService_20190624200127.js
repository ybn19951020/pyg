app.service('loginService',function($http){
    this.loginName =function() {
        return $htpp.get('../login/name.do')
    }
});