/**
 * 
 */
var app=angular.module("app", ['ui.router', 'ngResource', 'ClienteaApp.service', 'ClienteApp.controller']);

app.config(function($stateProvider) {	
	$stateProvider.state('clientes',{
		url: '/clientes',
		templateUrl: 'modulos/clientes.html',
		controller: 'ClienteListController'		
	}).state('clientes.listCliente', {
		url: '/clientes/clientes',
		templateUrl: 'modulos/clientes/clientes.html',
		controller: 'ClienteListController'
	}).state('clientes.viewCliente', {
		url: '/clientes/:clieid/view',
		templateUrl: 'modulos/clientes/cliente-view.html',
		controller: 'ClienteViewController'
	}).state('clientes.newCliente', {
		url: '/clientes/new',
		templateUrl: 'modulos/clientes/cliente-add.html',
		controller: 'ClienteCreateController',
	}).state('clientes.editCliente', {
		url: '/clientes/:clieid/edit',
		templateUrl: 'modulos/clientes/cliente-edit.html',
		controller: 'ClienteUpdateController'
	});
});