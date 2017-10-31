'use strict'
angular.module('userModule')
.controller('sorteosController',function($scope,OperationsSorteoteams,$location,$route){
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
    $scope.clasificacion=[
		{
            repechaje:0,
            directos:1,
            nombre:"O",
            lista:[],
            listar:[]
		},
        {
        	repechaje:1,
            directos:3,
            nombre:"CONCACAF",
			lista:[],
			listar:[]
        },
        {
        	repechaje:8,
            directos:9,
            nombre:"UEFA",
            lista:[],
            listar:[]
        },
        {
            repechaje:1,
            directos:4,
            nombre:"CONMEBOL",
            lista:[],
            listar:[]
        },
        {
            repechaje:1,
            directos:0,
            nombre:"OFC",
            lista:[],
            listar:[]
        },
        {
            repechaje:1,
            directos:4,
            nombre:"AFC",
            lista:[],
            listar:[]
        },
        {
            repechaje:0,
            directos:5,
            nombre:"CAF",
            lista:[],
            listar:[]
        }
	]


	$scope.equipo ={
		nombre:"",
		puntos:"",
		bandera:"",
		estado:"",
		nombre_confederacion:""
	};
    //This function get all teams in the ranking
	$scope.getTodosEquipos = function getEquipos(){
		OperationsSorteoteams.getallTeams(function(res){
			$scope.listaTeams = res;
			localStorage.setItem("listaTeams",JSON.stringify($scope.listaTeams));
		});
	};
	function eliminarInactivos(lista){
        for(var y=0;y<lista.length;y++){
            if(lista[y].estado==="0"){
                lista.splice(y,1);
            }
        }
        return lista;
    }
    $scope.getEquipos = function getEquipos(){
        $("#categoria_equipos_s").val(localStorage.getItem("categoria"));
        console.log(localStorage.getItem("categoria"));
        OperationsSorteoteams.getTeams({categoria:localStorage.getItem("categoria")},function(res) {
            $scope.listaTeams = res;
            $scope.listaTeams=eliminarInactivos($scope.listaTeams);
            console.log($scope.listaTeams);
            $location.path('seleccion');
        });
    };
	//$scope.getEquipos();
    $("#categoria_equipos_s").change(function(){
        localStorage.setItem("categoria",$(this).val());
        $scope.getEquipos();
    });
    function existe(nombre,confederacion){
    	console.log(nombre);
    	console.log(confederacion);
            for(var x=0;x<7;x++){
				if(x===0){
                    if($scope.clasificacion[x].lista.length>0){
                        if ($scope.clasificacion[x].lista[x]=== nombre) {
									return true;
                        }
                    }
				}else{
                    if($scope.clasificacion[x].nombre===confederacion){
                        if($scope.clasificacion[x].lista.length>0){
                            for(var y=0;y<$scope.clasificacion[x].lista.length;y++){
                                if($scope.clasificacion[x].lista[y]===nombre){
                                    return true;
                                }
                            }
                            for(var i=0;i<$scope.clasificacion[x].listar.length;i++){
                                if($scope.clasificacion[x].listar[i]===nombre){
                                    return true;
                                }
                            }
                        }
                    }
				}
            }
            return false;
    }
	function borrarClasificacion(nombre,confederacion){
        for(var x=0;x<7;x++){
        	if(x===0){
                if($scope.clasificacion[x].lista[x]===nombre){
                    $scope.clasificacion[x].lista.splice(x,1);
                    $scope.clasificacion[x].directos= $scope.clasificacion[x].directos+1;
                    console.log( $scope.clasificacion);
                    alertify.success("A desmarcado el anfitrion proceda a elegirlo denuevo");
				}
			}
            if($scope.clasificacion[x].nombre===confederacion){
                for(var y=0;y<$scope.clasificacion[x].lista.length;y++){
                    if($scope.clasificacion[x].lista[y]===nombre){
                        $scope.clasificacion[x].lista.splice(y,1);
                        $scope.clasificacion[x].directos= $scope.clasificacion[x].directos+1;
                        alertify.success("A desmarcado un pase directo proceda a elegir otro");
                    }
                }
                for(var y=0;y<$scope.clasificacion[x].listar.length;y++){
                    if($scope.clasificacion[x].listar[y]===nombre){
                        $scope.clasificacion[x].listar.splice(y,1);
                        $scope.clasificacion[x].repechaje= $scope.clasificacion[x].repechaje+1;
                        alertify.success("A desmarcado un equipo de repechaje proceda a elegirlo denuevo");
                    }
                }
            }
        }
	}
	function  existenpasesDirectos(confederacion){
        for(var x=0;x<7;x++){
            if($scope.clasificacion[x].nombre===confederacion){
                console.log("prueba entro:"+confederacion)
                if($scope.clasificacion[x].directos>0){
                	if($scope.clasificacion[x].directos===1){
                		alertify.success("Ya terminido de elegir los pases directos,"+"\n"+"ahora proceda a elegir los equipos de repechaje");
					}
                	return true;
				}
            }
        }
    }
    function  existenpasesRepechaje(confederacion){
        for(var x=0;x<7;x++){
            if($scope.clasificacion[x].nombre===confederacion){
                if($scope.clasificacion[x].repechaje>0){
                    return true;
                }
            }
        }
        return false;
    }
    function seagotaronCupos(){
        for(var x=0;x<7;x++){
            if($scope.clasificacion[x].directos>0 || $scope.clasificacion[x].repechaje>0){
                return false;
            }
        }
        return true;
    }
	function agregarClasificados(nombre,confederacion){
        if($scope.clasificacion[0].lista.length===0){
        		alertify.success("El anfitrion se eligio con exito");
        		$scope.clasificacion[0].lista.push(nombre);
            	$scope.clasificacion[0].directos=$scope.clasificacion[0].directos-1;
            	console.log($scope.clasificacion);
        }
        else if(existenpasesDirectos(confederacion)){
            alertify.success("Se eligio de pase directo con exito");
            for(var x=0;x<7;x++){
                if($scope.clasificacion[x].nombre===confederacion){
                    $scope.clasificacion[x].lista.push(nombre);
                    $scope.clasificacion[x].directos=$scope.clasificacion[x].directos-1;
                    console.log($scope.clasificacion);
                }
            }
		}
		else if(existenpasesRepechaje(confederacion)){
            alertify.success("Se mando el equipo a repechaje con exito");
            for(var x=0;x<7;x++){
                if($scope.clasificacion[x].nombre===confederacion){
                    $scope.clasificacion[x].listar.push(nombre);
                    $scope.clasificacion[x].repechaje=$scope.clasificacion[x].repechaje-1;
                    console.log($scope.clasificacion);
                }
            }
		}
		else if(seagotaronCupos()){
            alertify.success("Ya selecciono todos los equipos que clasifican "+"\n"+"directamente,ademas los que van repechaje");
		}
		else{
			alertify.success("Ya selecciono todos los equipos del mundial"+"\n"+"para la "+confederacion);
		}
    }
    $scope.seleccionado=function seleccionado(nombre,confederacion){
			if(existe(nombre,confederacion)){
				borrarClasificacion(nombre,confederacion);
			}
			else{
				console.log("entro");
				agregarClasificados(nombre,confederacion);
			}
    }
	$scope.iniciarRepechaje=function iniciarRepechaje(){
		//if(seagotaronCupos()){
			localStorage.setItem("seleccionados",JSON.stringify($scope.clasificacion));
            $location.path('repechajes');
            $route.reload();
		//}
		//else{
		//	alertify.error("Debe seleccionar todos los paises que pasan"+"\n"+"tanto al mundial como a repechaje");
		//}
    }
    $scope.partidos=[];
	$scope.equipo1={};
    $scope.equipo2={};
    $scope.equipo3={};
    $scope.equipo4={};
    $("#equipo1").change(function(){
        $scope.equipo1.nombre=$(this).val();
        console.log($scope.equipo1.nombre);
    });
    $("#equipo2").change(function(){
        $scope.equipo2.nombre=$(this).val();
        console.log($scope.equipo2.nombre);
    });
    $("#equipo3").change(function(){
        $scope.equipo3.nombre=$(this).val();
        console.log($scope.equipo3.nombre);
    });
    $("#equipo4").change(function(){
        $scope.equipo4.nombre=$(this).val();
        console.log($scope.equipo4.nombre);
    });
    //This function search if any item is equal to other
    function validarEnfrentamientos(){
        if($scope.equipo1.nombre!=$scope.equipo2.nombre&&$scope.equipo1.nombre!=$scope.equipo3.nombre&&$scope.equipo1.nombre!=$scope.equipo4.nombre&&$scope.equipo2.nombre!=$scope.equipo3.nombre&&$scope.equipo2.nombre!=$scope.equipo4.nombre&&$scope.equipo3.nombre!=$scope.equipo4.nombre){
            return true;
        }
        else{
            return false;
        }
    }
    //This function return a number random between of 1 and 8
    function generaRandom(inicio,final){
        var x = Math.floor((Math.random() * final) + inicio);
        return x;
    }
    $scope.equiposUEFA=[];
    //This funcion generete the match of teams in confederations that not are in the UEFA
    function partidosNOUEFA(){
        for(var x=1;x<$scope.clasificacion.length;x++){
            if($scope.clasificacion[x].nombre===$scope.equipo1.nombre){
                $scope.equipo1.nombre=$scope.clasificacion[x].listar[0];
            }
            if($scope.clasificacion[x].nombre===$scope.equipo2.nombre){
                $scope.equipo2.nombre=$scope.clasificacion[x].listar[0];
            }
            if($scope.clasificacion[x].nombre===$scope.equipo3.nombre){
                $scope.equipo3.nombre=$scope.clasificacion[x].listar[0];
            }
            if($scope.clasificacion[x].nombre===$scope.equipo4.nombre){
                $scope.equipo4.nombre=$scope.clasificacion[x].listar[0];
            }
            if($scope.clasificacion[x].nombre==="UEFA"){
                for(var y=0;y<$scope.clasificacion[x].listar.length;y++){
                    $scope.equiposUEFA.push($scope.clasificacion[x].listar[y]);
                }
            }
        }
        var partido1={local:$scope.equipo1.nombre,visitante:$scope.equipo2.nombre,gl:0,gv:0,tl:false,tv:false,e:false,glr:false,gvr:false};
        var partido2={local:$scope.equipo1.nombre,visitante:$scope.equipo2.nombre,gl:0,gv:0,tl:false,tv:false,e:false,glr:false,gvr:false};
        var partido3={local:$scope.equipo3.nombre,visitante:$scope.equipo4.nombre,gl:0,gv:0,tl:false,tv:false,e:false,glr:false,gvr:false};
        var partido4={local:$scope.equipo3.nombre,visitante:$scope.equipo4.nombre,gl:0,gv:0,tl:false,tv:false,e:false,glr:false,gvr:false};
        $scope.partidos.push(partido1);
        $scope.partidos.push(partido2);
        $scope.partidos.push(partido3);
        $scope.partidos.push(partido4);
    }
    var listaIndices=[];//This list has the index of the teams of the UEFA
    //This function return if the list index has the number that receive
    function existeEnIndices(num) {
        for(var x=0;x<listaIndices.length;x++){
            if(listaIndices[x]===num){
                return true;
            }
        }
        return false;
    }
    //This funcion generete the match of teams in the UEFA
    function partidosUEFA(){
            while(listaIndices.length!=8){
                var num=generaRandom(1,8);
                if(existeEnIndices(num)){

                }
                else{
                    listaIndices.push(num);
                }
            }
            for(var y=0;y<listaIndices.length;y++){
                if (y % 2 != 0) {
                    console.log(y);
                    console.log("l:"+listaIndices[y-1]+","+$scope.equiposUEFA[listaIndices[y-1]]+"v:"+listaIndices[y]+","+$scope.equiposUEFA[listaIndices[y]]);
                    var partido ={
                        local:$scope.equiposUEFA[listaIndices[y]-1] ,
                        visitante: $scope.equiposUEFA[listaIndices[y-1]-1],
                        gl: 0,
                        gv: 0,
                        tl: false,
                        tv: false,
                        e:false,
                        glr:false,
                        gvr:false
                    };
                    var partido1 ={
                        local:$scope.equiposUEFA[listaIndices[y]-1] ,
                        visitante: $scope.equiposUEFA[listaIndices[y-1]-1],
                        gl: 0,
                        gv: 0,
                        tl: false,
                        tv: false,
                        e:false,
                        glr:false,
                        gvr:false
                    };
                    $scope.partidos.push(partido);
                    $scope.partidos.push(partido1);
                }
            }
            for(var x=0;x<$scope.partidos.length;x++){
                $scope.partidos[x].gl=generaRandom(1,3);
                $scope.partidos[x].gv=generaRandom(1,3);
            }
            for(var x=0;x<$scope.partidos.length;x++){
                if($scope.partidos[x].gl>$scope.partidos[x].gv){
                    $scope.partidos[x].tl=true;
                }
                if($scope.partidos[x].gl<$scope.partidos[x].gv){
                    $scope.partidos[x].tv=true;
                }
                if($scope.partidos[x].gl===$scope.partidos[x].gv){
                    $scope.partidos[x].e=true;
                }
            }
            for(var x=0;x<$scope.partidos.length;x++){
                if(x%2!=0){
                    var golesLocal=$scope.partidos[x].gl+$scope.partidos[x-1].gl;
                    var golesVisitante=$scope.partidos[x].gv+$scope.partidos[x-1].gv;
                    if(golesLocal>golesVisitante){
                        $scope.partidos[x].glr=true;
                        $scope.partidos[x-1].glr=true;
                    }
                    if(golesLocal<golesVisitante){
                        $scope.partidos[x].gvr=true;
                        $scope.partidos[x-1].gvr=true;
                    }
                    if(golesLocal===golesVisitante){
                        var penales=generaRandom(1,2);
                        if(penales===1){
                            $scope.partidos[x].glr=true;
                            $scope.partidos[x-1].glr=true;
                        }
                        if(penales===2){
                            $scope.partidos[x].gvr=true;
                            $scope.partidos[x-1].gvr=true;
                        }
                    }

                }
            }
            console.log($scope.partidos);

    }
    function buscarBandera(pais) {
        $scope.getTodosEquipos();
        $scope.listaTeams=JSON.parse(localStorage.getItem("listaTeams"));
        for(var x=0;x<$scope.listaTeams.length;x++){
            if($scope.listaTeams[x].nombre===pais){
                return $scope.listaTeams[x].bandera;
            }
        }
    }
    //This function generate the table with the summary of repechage
    function MostrarResulatdos() {
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Bandera");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda1 = document.createElement("td");
        var textoCelda1 = document.createTextNode("local");
        celda1.appendChild(textoCelda1);
        hilera.appendChild(celda1);
        var celda2 = document.createElement("td");
        var textoCelda2 = document.createTextNode("Goles local_");
        celda2.appendChild(textoCelda2);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        var textoCelda3 = document.createTextNode("_Goles visitante");
        celda3.appendChild(textoCelda3);
        hilera.appendChild(celda3);

        var celda4 = document.createElement("td");
        var textoCelda4 = document.createTextNode("Visitante");
        celda4.appendChild(textoCelda4);
        hilera.appendChild(celda4);

        var celda7 = document.createElement("td");
        var textoCelda7 = document.createTextNode("Bandera");
        celda7.appendChild(textoCelda7);
        hilera.appendChild(celda7);


        var celda5 = document.createElement("td");
        var textoCelda5 = document.createTextNode("Ganador");
        celda5.appendChild(textoCelda5);
        hilera.appendChild(celda5);

        $("#tableresultados").append(hilera);
        //Se encarga de cargar todas las filas a la tabla
        for (var i = 0; i < $scope.partidos.length; i++) {
                if(i%2!=0){
                    var hilera = document.createElement("tr");
                    for (var j = 0; j < 7; j++){
                        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                        // texto sea el contenido de <td>, ubica el elemento <td> al final
                        // de la hilera de la tabla
                        var celda = document.createElement("td");
                        if(j==0){
                            var imgCelda =  document.createElement("img");
                            imgCelda.src=buscarBandera($scope.partidos[i-1].local);
                            imgCelda.width=75;
                            imgCelda.height=50;
                            celda.appendChild(imgCelda);
                        }
                        if(j==1){
                            var textoCelda = document.createTextNode($scope.partidos[i-1].local);
                            celda.appendChild(textoCelda);
                        }
                        if(j==2){
                            var textoCelda = document.createTextNode($scope.partidos[i-1].gl);
                            celda.appendChild(textoCelda);
                        }if(j==3){
                            var textoCelda = document.createTextNode($scope.partidos[i-1].gv);
                            celda.appendChild(textoCelda);
                        }
                        if(j==4){
                            var textoCelda = document.createTextNode($scope.partidos[i-1].visitante);
                            celda.appendChild(textoCelda);
                        }
                        if(j==5){
                            var imgCelda =  document.createElement("img");
                            imgCelda.src=buscarBandera($scope.partidos[i-1].visitante);
                            imgCelda.width=75;
                            imgCelda.height=50;
                            celda.appendChild(imgCelda);
                        }
                        if(j==6){
                            if($scope.partidos[i-1].tl){
                                var textoCelda = document.createTextNode("local");
                                celda.appendChild(textoCelda);
                            }
                            if($scope.partidos[i-1].tv){
                                var textoCelda = document.createTextNode("visitante");
                                celda.appendChild(textoCelda);
                            }
                            if($scope.partidos[i-1].e){
                                var textoCelda = document.createTextNode("empate");
                                celda.appendChild(textoCelda);
                            }
                        }
                        hilera.appendChild(celda);

                    }
                    $("#tableresultados").append(hilera);

                    var hilera1 = document.createElement("tr");
                    for (var j = 0; j < 7; j++){
                        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                        // texto sea el contenido de <td>, ubica el elemento <td> al final
                        // de la hilera de la tabla
                        var celda = document.createElement("td");
                        if(j==0){
                            var imgCelda =  document.createElement("img");
                            imgCelda.src=buscarBandera($scope.partidos[i].visitante);
                            imgCelda.width=75;
                            imgCelda.height=50;
                            celda.appendChild(imgCelda);
                        }
                        if(j==1){
                            var textoCelda = document.createTextNode($scope.partidos[i].visitante);
                            celda.appendChild(textoCelda);
                        }
                        if(j==2){
                            var textoCelda = document.createTextNode($scope.partidos[i].gv);
                            celda.appendChild(textoCelda);
                        }if(j==3){
                            var textoCelda = document.createTextNode($scope.partidos[i].gl);
                            celda.appendChild(textoCelda);
                        }
                        if(j==4){
                            var textoCelda = document.createTextNode($scope.partidos[i].local);
                            celda.appendChild(textoCelda);
                        }
                        if(j==5){
                            var imgCelda =  document.createElement("img");
                            imgCelda.src=buscarBandera($scope.partidos[i].local);
                            imgCelda.width=75;
                            imgCelda.height=50;
                            celda.appendChild(imgCelda);
                        }
                        if(j==6){
                            if($scope.partidos[i].tl){
                                var textoCelda = document.createTextNode("visitante");
                                celda.appendChild(textoCelda);
                            }
                            if($scope.partidos[i].tv){
                                var textoCelda = document.createTextNode("local");
                                celda.appendChild(textoCelda);
                            }
                            if($scope.partidos[i].e){
                                var textoCelda = document.createTextNode("empate");
                                celda.appendChild(textoCelda);
                            }
                        }
                        hilera1.appendChild(celda);
                    }
                    $("#tableresultados").append(hilera1);
                    var hilera2 = document.createElement("tr");
                    var celda1 = document.createElement("td");
                    if($scope.partidos[i].glr){
                        var textoCelda = document.createTextNode("Pasa:"+$scope.partidos[i].local);
                        celda1.appendChild(textoCelda);
                        hilera2.appendChild(celda1);
                    }
                    if($scope.partidos[i].gvr){
                        var textoCelda = document.createTextNode("Pasa:"+$scope.partidos[i].visitante);
                        celda1.appendChild(textoCelda);
                        hilera2.appendChild(celda1);
                    }
                    $("#tableresultados").append(hilera2);
                }
        }
    }
    //This function sort the list
    function  ordenarLista(lista){
            lista.sort(function (a,b) {
                if (parseFloat(a.puntos) > parseFloat(b.puntos)){
                    return -1;
                }
                if (parseFloat(a.puntos) < parseFloat(b.puntos)){
                    return 1;
                }
                // a must be equal to b
                return 0;
            });
            return lista;
    }
    $scope.listaClasificados=[];
    //This function define the teams that are classifieds to the world cups
    function definirClasificados(){
            for(var x=1;x<$scope.clasificacion.length;x++){
                for(var y=0;y<$scope.clasificacion[x].lista.length;y++){
                    $scope.listaClasificados.push($scope.clasificacion[x].lista[y]);
                }
            }
            for(var x=0;x<$scope.partidos.length;x++){
                if($scope.partidos[x].tl){
                    $scope.listaClasificados.push($scope.partidos[x].local);
                }
                if($scope.partidos[x].tv){
                    $scope.listaClasificados.push($scope.partidos[x].visitante);
                }
            }
            $scope.listaClasificados.push($scope.clasificacion[0].lista[0]);
            //console.log($scope.listaClasificados);
            $scope.getTodosEquipos();
            $scope.listaTeams=JSON.parse(localStorage.getItem("listaTeams"));
            for(var x=0;x<$scope.listaTeams.length;x++){
                //console.log($scope.listaTeams[x]);
                for(var y=0;y<$scope.listaClasificados.length;y++){
                    if($scope.listaTeams[x].nombre===$scope.listaClasificados[y]){
                        //console.log("entro");
                        $scope.listaClasificados[y]=$scope.listaTeams[x];
                    }
                }
            }
            $scope.listaClasificados=ordenarLista($scope.listaClasificados);
            console.log($scope.listaClasificados);
    }
    //This function determinate if the confederations are diferents
    $scope.determinarRepechaje=function determinarRepechaje(){
                if(validarEnfrentamientos()){
                    $scope.clasificacion=JSON.parse(localStorage.getItem("seleccionados"));
                    partidosNOUEFA();
                    partidosUEFA();
                    MostrarResulatdos();
                    definirClasificados();
                }
                else{
                    alertify.error("Las confederaciones deben ser distintas");
                }
    }
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
