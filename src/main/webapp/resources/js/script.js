/**
 * 
 */
var app=angular.module("app", []);

app.controller('LoginController', function($scope) {
	  alert($scope.mensaje);
	  $scope.usuario = {username:'mkyong', password:'123456'};
	  $scope.mensaje = 'mensaje 2';
	  $scope.cambiarMensaje = function() {
		  $scope.username = mensaje;		
	  }
	});




