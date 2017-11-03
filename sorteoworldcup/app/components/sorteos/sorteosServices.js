'use strict'
angular.module('userModule')
    .factory('OperationsSorteoteams',function($http,$location){
        var urlp="http://localhost/sorteoworldcup/server/equipos/CRUDequipos.php?Funcion=";
        var urlps="http://localhost/sorteoworldcup/server/sorteos/CRUDsorteos.php?Funcion=";
        var respuesta={
            getTeams: function(equipo,callback){
                $http({
                    method  :'POST',
                    url     : urlp+"ObtenertodosEquipos",
                    data    : equipo

                })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
                    .success(function(data){
                        callback(data);
                    }).error(function(data) {
                });
            },
            getallTeams: function(callback){
                $http.get(
                    urlp+"ObtenertodosEquiposMundial"
                ).success(function successCallback(response){
                    callback(response);
                }).error(function errorCallback(response) {
                    //En caso de fallo en la peticion entra en esta funcion
                    callback(response);
                });
            },
            getTable: function(sorteo,callback){
                $http({
                    method  :'POST',
                    url     : urlps+"ObtenertodosGrupos",
                    data    : sorteo

                })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
                    .success(function(data){
                        callback(data);
                    }).error(function(data) {
                });
            },
            getDraws: function(callback){
                $http.get(
                    urlps+"ObtenertodosSorteosMundial"
                ).success(function successCallback(response){
                    callback(response);
                }).error(function errorCallback(response) {
                    //En caso de fallo en la peticion entra en esta funcion
                    callback(response);
                });
            },
            //Esta funcion se encarga de insertar un estudiante mediante la conexion con el servidor
            putDraws:function(resultado,callback){
                 $http({
                    method  :'POST',
                    url     : urlps+"putSorteos",
                    data    : resultado

                })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
                    .success(function(data){
                            alertify.success("insercion exitosa");
                            console.log("service:");
                            console.log(data);
                            callback({success: true});
                    }).error(function(data) {
                    //En caso de fallo en la peticion entra en esta funcion
                            alertify.error("Se ha producido un error en la insercion"+data);
                            callback({success: false});
                });
            }
        }
        return respuesta;
    });
