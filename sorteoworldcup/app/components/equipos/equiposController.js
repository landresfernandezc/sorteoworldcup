'use strict'
angular.module('userModule')
.controller('equiposController',function($scope,OperationsTeams,$location,$route){
	//alertify.success("Ingreso exitoso");
	$scope.listaTeams = [];
	$scope.confederacion={
		datos:""
	};
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
	$scope.equipo ={
		nombre:"",
		puntos:"",
		bandera:"",
		estado:"",
		nombre_confederacion:""
	};
    console.log("entro al controller");
	$scope.getEquipos = function getEquipos() {
        $("#categoria_equipos").val(localStorage.getItem("categoria"));
        console.log(localStorage.getItem("categoria"));
		OperationsTeams.getTeams({categoria:localStorage.getItem("categoria")},function(res) {
			$scope.listaTeams = res;
            console.log($scope.listaTeams);
			$location.path('equipos');
		});
	};
    $("#categoria_equipos").change(function(){
        localStorage.setItem("categoria",$(this).val());
        $scope.getEquipos();
    });
	$scope.getEquipos();
	$scope.putEquipo = function putEquipo(equipo){
		$scope.equipo.nombre_confederacion=$scope.confederacion.datos.nombre;
		OperationsTeams.putTeams($scope.equipo, function(response) {
			if (response.success) {
			    $location.path('equipos');
                $route.reload();
			}
		});
	};
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
