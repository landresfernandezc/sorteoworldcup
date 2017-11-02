'use strict'
angular.module('userModule')
    .factory('OperationsTeams',function($http,$location){
        var urlp="http://localhost/sorteoworldcup/server/equipos/CRUDequipos.php?Funcion=";
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
            //Esta funcion se encarga de insertar un estudiante mediante la conexion con el servidor
            putTeams:function(equipo,callback){
                 $http({
                    method  :'POST',
                    url     : urlp+"putEquipos",
                    data    : equipo

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
            },
            deleteTeams:function(nombre,callback){
                $http({
                    method  : 'POST',
                    url     : urlp+"deleteEquipos",
                    data    : {nombre:nombre}

                })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
                    .success(function(data){
                            // Showing errors.
                            alertify.success("se actualizo el estado con exito");
                            callback({success: true});
                            console.log(data);
                        
                    }).error(function(data){
                    //En caso de fallo en la peticion entra en esta funcion
                            alertify.error("Se ha producido un error en la actualizacion de estadp"+data);
                            callback({success: false});
                });
            },
            updateTeams:function(equipo,callback){
                $http({
                    method  : 'POST',
                    url     : urlp+"postEquipos",
                    data    : equipo

                })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
                    .success(function(data){
                            console.log("service:");
                            console.log(data);
                            alertify.success("se actualizo exitosamente ");
                            callback({success: true});
                    }).error(function(data){
                    //En caso de fallo en la peticion entra en esta funcion
                            alertify.error("Se ha producido un error en la eliminacion"+data);
                            callback({success: false});
                });
            }
        }
        return respuesta;
    });
