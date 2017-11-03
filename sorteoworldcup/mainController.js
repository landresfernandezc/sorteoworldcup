'use strict'
angular.module('userModule')
.controller('mainController',function($scope,$location,$route,$http){
    var urlp="http://localhost/sorteoworldcup/server/usuarios/CRUDusuarios.php?Funcion=";
    $scope.usuario={
        nombre:"",
        apellido1:"",
        apellido2:"",
        clave:"",
        fecha:"",
        nombre_usuario:""
    }
    $scope.datos_usuario={
        nombre_usuario:"",
        clave:""
    }
    //This function send to  the server with the information of the user
    $scope.validaUsuario=function(datos_usuario){
        $http({
            method  :'POST',
            url     : urlp+"ObtenertodosUsuarios",
            data    : datos_usuario
        })
            .then(function mySuccess(response) {
                if(response.data.success){
                    sessionStorage.setItem("usuario",datos_usuario.nombre_usuario);
                    localStorage.setItem("categoria","UEFA");
                    window.location.href = ('app/main.html');
                }
                else{
                    alertify.error("Datos inconsistentes");
                }
            }, function myError(response) {
                alertify.error("Revise su conexion a Internet");
            });
     }
     //Function that register one user in the system
     $scope.registrarUsuario=function(usuario){
         var fechaActualget = new Date();
         var year=fechaActualget.getFullYear();
         var month=fechaActualget.getMonth()+1;
         var day=fechaActualget.getDate();
         var hours=fechaActualget.getHours();
         var minutes=fechaActualget.getMinutes();
         var seconds=fechaActualget.getSeconds();
         var fecha_actual=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
         usuario.fecha=fecha_actual;
         $http({
             method  :'POST',
             url     : urlp+"putUsuarios",
             data    : usuario
         })
             .then(function mySuccess(response) {
                 alertify.success("Se registro con exito");
             }, function myError(response) {
                 alertify.error("El servidor no responde revise su conexion");
             });
     }
});

