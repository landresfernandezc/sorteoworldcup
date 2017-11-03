'use strict'
angular.module('userModule')
    .factory('OperationsSorteoteams',function($http,$location){
        var urlp="http://localhost/sorteoworldcup/server/equipos/CRUDequipos.php?Funcion=";
        var urlps="http://localhost/sorteoworldcup/server/sorteos/CRUDsorteos.php?Funcion=";
        var respuesta={
            getTeams: function(equipo,callback){//This function go to the serve and return the answer of the serve with the teams to confederation
                $http({
                    method  :'POST',
                    url     : urlp+"ObtenertodosEquipos",
                    data    : equipo

                })
                    .success(function(data){
                        callback(data);
                    }).error(function(data) {
                });
            },
            //This function go to the serve and return the answer of the serve with the teams
            getallTeams: function(callback){
                $http.get(
                    urlp+"ObtenertodosEquiposMundial"
                ).success(function successCallback(response){
                    callback(response);
                }).error(function errorCallback(response) {
                    callback(response);
                });
            },
            //Get the groups of a lot
            getTable: function(sorteo,callback){
                $http({
                    method  :'POST',
                    url     : urlps+"ObtenertodosGrupos",
                    data    : sorteo

                })
                    .success(function(data){
                        callback(data);
                    }).error(function(data) {
                });
            },//Get the draws
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
            //This function send the lot to the server since a end point
            putDraws:function(resultado,callback){
                 $http({
                    method  :'POST',
                    url     : urlps+"putSorteos",
                    data    : resultado

                })
                    .success(function(data){
                            alertify.success("insercion exitosa");
                            console.log("service:");
                            console.log(data);
                            callback({success: true});
                    }).error(function(data) {
                            alertify.error("Se ha producido un error en la insercion"+data);
                            callback({success: false});
                });
            }
        }
        return respuesta;
    });
