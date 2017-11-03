/**
 * Created by Andres on 11/2/2017.
 */
'use strict'
angular.module('userModule')
    .controller('seleccionController',function($scope,OperationsSorteoteams,$location,$route){
        $scope.listaTeams = [];
        $scope.bandera=true;
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
            OperationsSorteoteams.getTeams({categoria:localStorage.getItem("categoria")},function(res){
                $scope.listaTeams = res;
                $scope.listaTeams=eliminarInactivos($scope.listaTeams);
                console.log($scope.listaTeams);
                $location.path('seleccion');
            });
        };
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
            if(seagotaronCupos()){
            localStorage.setItem("seleccionados",JSON.stringify($scope.clasificacion));
            $location.path('repechajes');
            $route.reload();
            }
            else{
            	alertify.error("Debe seleccionar todos los paises que pasan"+"\n"+"tanto al mundial como a repechaje");
            }
        }
    });
