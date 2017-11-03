'use strict'
angular.module('userModule')
    .factory('OperationsTeams',function($http,$location){
        var urlp="http://localhost/sorteoworldcup/server/equipos/CRUDequipos.php?Funcion=";
        var respuesta={
            //This function get the teams
            getTeams: function(equipo,callback){
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
            //This function put the teams since the server
            putTeams:function(equipo,callback){
                 $http({
                    method  :'POST',
                    url     : urlp+"putEquipos",
                    data    : equipo

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
            },
            //This function delete a team
            deleteTeams:function(nombre,callback){
                $http({
                    method  : 'POST',
                    url     : urlp+"deleteEquipos",
                    data    : {nombre:nombre}

                })
                    .success(function(data){
                            // Showing errors.
                            alertify.success("se actualizo el estado con exito");
                            callback({success: true});
                            console.log(data);
                        
                    }).error(function(data){
                            alertify.error("Se ha producido un error en la actualizacion de estadp"+data);
                            callback({success: false});
                });
            },
            //This function update the data of a team
            updateTeams:function(equipo,callback){
                $http({
                    method  : 'POST',
                    url     : urlp+"postEquipos",
                    data    : equipo

                }).success(function(data){
                            console.log("service:");
                            console.log(data);
                            alertify.success("se actualizo exitosamente ");
                            callback({success: true});
                    }).error(function(data){
                            alertify.error("Se ha producido un error en la eliminacion"+data);
                            callback({success: false});
                });
            }
        }
        return respuesta;
    });
