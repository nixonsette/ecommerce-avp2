var app = angular.module('ecommerce', ['ngRoute'])

.config(function($routeProvider){
    $routeProvider
    
    .when("/", {
        templateUrl: 'app/pages/bemvindo.html',
        controller: 'BemVindoController'
    })
    
    .otherwise({
       redirectTo: '/' 
    });
})

.controller('BemVindoController', function($scope, $http){
    $scope.listaCategorias = {};
    
    $scope.init = function(){
        $http.get("api/categoria/consultar.php?retornar_imagem=sim")
            .then(function(data){
               $scope.listaCategorias = data.data; 
            });
    }
    $scope.teste = "testeee"
})