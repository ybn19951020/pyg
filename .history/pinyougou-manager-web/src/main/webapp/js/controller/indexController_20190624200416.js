app.controller('indexController',function($scope,loginService){
    //显示 当前
    $scope.showLoginName=function(){
        loginService.loginName().success(
            function(response){
                $scope.loginName=response.loginName;
            }
        )
    }
})