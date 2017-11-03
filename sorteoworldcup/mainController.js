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
    $scope.validaUsuario=function(datos_usuario){
        $http({
            method  :'POST',
            url     : urlp+"ObtenertodosUsuarios",
            data    : datos_usuario
        })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
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
     $scope.registrarUsuario=function(usuario){
         var fechaActualget = new Date();
         var year=fechaActualget.getFullYear();
         var month=fechaActualget.getMonth()+1;
         var day=fechaActualget.getDate();
         var hours=fechaActualget.getHours();
         var minutes=fechaActualget.getMinutes();
         var seconds=fechaActualget.getSeconds();
         var fecha_actual=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
         //var fecha_actual = new Date(year, month, day, hours, minutes, seconds, milliseconds);
         usuario.fecha=fecha_actual;
         alert(fecha_actual);
         $http({
             method  :'POST',
             url     : urlp+"putUsuarios",
             data    : usuario
         })// si la insercion fue exitosa entra al succes de lo contrario retorna un error departe del servidor
             .then(function mySuccess(response) {
                 alertify.success("Se registro con exito");
             }, function myError(response) {
                 alertify.error("El servidor no responde revise su conexion");
             });
     }
});

