/**
 * Created by Andres on 11/2/2017.
 */
/**
 * Created by Andres on 11/2/2017.
 */
'use strict'
angular.module('userModule')
    .controller('sorteosController',function($scope,OperationsSorteoteams,$location,$route){
        $scope.listaSorteos = [];
        $scope.listaGrupos=[];
        $scope.grupoa=[];
        $scope.grupob=[];
        $scope.grupoc=[];
        $scope.grupod=[];
        $scope.grupoe=[];
        $scope.grupof=[];
        $scope.grupog=[];
        $scope.grupoh=[];
        //This function get the lots
        $scope.getSorteos = function getSorteos(){
            OperationsSorteoteams.getDraws(function(res){
                $scope.listaSorteos = res;
                $location.path('sorteos');
            });
        };
        $scope.getSorteos();
        //This function draw the groups
        function  declararGrupos(){
            for(var x=0;x<$scope.listaGrupos.length;x++){
                if(x<4){
                    $scope.grupoa.push($scope.listaGrupos[x])
                }
                if(x>3 && x<8){
                    $scope.grupob.push($scope.listaGrupos[x])
                }
                if(x>7 && x<12){
                    $scope.grupoc.push($scope.listaGrupos[x])
                }
                if(x>11 && x<16){
                    $scope.grupod.push($scope.listaGrupos[x])
                }
                if(x>15 && x<20){
                    $scope.grupoe.push($scope.listaGrupos[x])
                }
                if(x>19 && x<24){
                    $scope.grupof.push($scope.listaGrupos[x])
                }
                if(x>23 && x<28){
                    $scope.grupog.push($scope.listaGrupos[x])
                }
                if(x>27 && x<32){
                    $scope.grupoh.push($scope.listaGrupos[x])
                }
            }
        }
        //This function show the information of a lot
        $scope.verInfo=function verInfo(id){
            OperationsSorteoteams.getTable({id:id},function(res){
                $scope.listaGrupos = res;
                declararGrupos();
                console.log(res);
            });
        }
    });
