/**
 * 
 */
var app=angular.module("app",[]);
 
function PruebaController($scope) {
  $scope.mensaje="Index";
  $scope.cambiarMensaje = function() {
		$scope.username = mensaje;		
  }
}
