'use strict'
angular.module('userModule')
.controller('equiposController',function($scope,OperationsTeams,$location,$route){
	//list of teams in the world cup
	$scope.listaTeams = [];
	//Temporal variable
	$scope.confederacion={
		datos:""
	};
	//List of confederations
    $scope.confederaciones=[
        {
        	id:1,
           nombre:"CONCACAF"
        },
        {
        	id:2,
            nombre:"UEFA"
        },
        {
            id:3,
            nombre:"CONMEBOL"
        },
        {
            id:4,
            nombre:"OFC"
        },
        {
            id:5,
            nombre:"AFC"
        },
        {
            id:6,
            nombre:"CAF"
        }
    ];
    //Object of a team
	$scope.equipo ={
		nombre:"",
		puntos:"",
		bandera:"",
		estado:"",
		nombre_confederacion:""
	};
	//This function go to the service and get ths list of teams to category
	$scope.getEquipos = function getEquipos() {
        $("#categoria_equipos").val(localStorage.getItem("categoria"));
        console.log(localStorage.getItem("categoria"));
		OperationsTeams.getTeams({categoria:localStorage.getItem("categoria")},function(res) {
			$scope.listaTeams = res;
            console.log($scope.listaTeams);
			$location.path('equipos');
		});
	};
	//This function in JQuery detect when the select has a change
    $("#categoria_equipos").change(function(){
        localStorage.setItem("categoria",$(this).val());
        $scope.getEquipos();
    });
    //Call to the function that get the teams
	$scope.getEquipos();
	//This function go to the service and put a team in the database since a end point
	$scope.putEquipo = function putEquipo(equipo){
		$scope.equipo.nombre_confederacion=$scope.confederacion.datos.nombre;
		OperationsTeams.putTeams($scope.equipo, function(response) {
			if (response.success) {
			    $location.path('equipos');
                $route.reload();
			}
		});
	};
	//This function go to the service that go to the end point in the server and delete a team
	$scope.delete=function deleteEquipos(nombre){
		OperationsTeams.deleteTeams($scope.equipo.nombre,function(response){
				if(response.success){
					console.log("La operacion se genero con exito");
				    $location.path('equipos');
				    $route.reload();
				}
		});

	};
	$scope.postEquipo = function postEquipo(equipo) {
		OperationsTeams.updateTeams($scope.equipo, function(response) {
			if (response.success) {
			    $location.path('equipos');
			    $route.reload();
			}
		});
	};
	$scope.actualizarEquipo=function actualizarEquipo(equipo){
		$scope.equipo=equipo;
		console.log("actualiza:");
		console.log($scope.equipo);

	}
    $scope.actualizarEquipoEstado=function actualizarEquipoEstado(equipo){
        $scope.equipo=equipo;
        if(equipo.estado==='1'){
            document.getElementById(equipo.nombre).className="btn btn-danger";
		}
		else if(equipo.estado==='0'){
            document.getElementById(equipo.nombre).className="btn btn-success";
		}

    }
});
