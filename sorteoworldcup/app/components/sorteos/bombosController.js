/**
 * Created by Andres on 11/2/2017.
 */
var bandera_bombo1=true;
var bandera_bombo2=false;
var bandera_bombo3=false;
var bandera_bombo4=false;
var contador=0;
var grupoa=[];
var grupob=[];
var grupoc=[];
var grupod=[];
var grupoe=[];
var grupof=[];
var grupog=[];
var grupoh=[];
function existeBombo(nombre,lista){
    for(var x=0;x<lista.length;x++){
        if(lista[x].nombre===nombre){
            return true;
        }
    }
    return false;
}
function  esAnfitrion(nombre){
    var lista=JSON.parse(localStorage.getItem("seleccionados"));
    if(lista[0].lista[0]===nombre){
        return true;
    }
    else{
        return false;
    }

}
//This function draw the groups
function  pintarGrupos(nombre){
    if(contador===0){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupoa").append(hilera);
        if(esAnfitrion(nombre)){
            document.getElementById(nombre).className = "aelegido";
        }
        else{
            document.getElementById(nombre).className = "elegido";
        }
    }
    if(contador===1){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupob").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
    if(contador===2){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupoc").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
    if(contador===3){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupod").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
    if(contador===4){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupoe").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
    if(contador===5){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupof").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
    if(contador===6){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupog").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }

    if(contador===7){
        var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        $("#grupoh").append(hilera);
        document.getElementById(nombre).className = "elegido";
    }
}
function yaSalio(nombre){
    for(var x=0;x<grupoa.length;x++){
        if(grupoa[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupob.length;x++){
        if(grupob[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupoc.length;x++){
        if(grupoc[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupod.length;x++){
        if(grupod[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupoe.length;x++){
        if(grupoe[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupof.length;x++){
        if(grupof[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupog.length;x++){
        if(grupog[x]===nombre){
            return true;
        }
    }
    for(var x=0;x<grupoh.length;x++){
        if(grupoh[x]===nombre){
            return true;
        }
    }
    return false;
}
function Agregar(nombre){
    var  listabombo1=JSON.parse(localStorage.getItem("bombo1"));
    var  listabombo2=JSON.parse(localStorage.getItem("bombo2"));
    var  listabombo3=JSON.parse(localStorage.getItem("bombo3"));
    var  listabombo4=JSON.parse(localStorage.getItem("bombo4"));
    if(bandera_bombo1){
        if(existeBombo(nombre,listabombo1)){
            if(contador===0){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    if(esAnfitrion(nombre)){
                        grupoa.push(nombre);
                        pintarGrupos(nombre);
                        contador++;
                    }
                    else{
                        alertify.error("Primero debe elegir el anfitrion esta en rojo");
                    }
                }
            }
            else if(contador===1){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupob.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===2){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoc.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===3){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupod.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===4){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoe.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===5){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }else{
                    grupof.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===6){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupog.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===7){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoh.push(nombre);
                    pintarGrupos(nombre);
                    contador=0;
                    bandera_bombo1=false;
                    bandera_bombo2=true;
                }
            }
        }
    }
    if(bandera_bombo2){
        if(existeBombo(nombre,listabombo2)){
            if(contador===0){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoa.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===1){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupob.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===2){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoc.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===3){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupod.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===4){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoe.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===5){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }else{
                    grupof.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===6){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupog.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===7){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoh.push(nombre);
                    pintarGrupos(nombre);
                    contador=0;
                    bandera_bombo2=false;
                    bandera_bombo3=true;
                }
            }
        }
    }
    if(bandera_bombo3){
        if(existeBombo(nombre,listabombo3)){
            if(contador===0){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoa.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===1){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupob.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===2){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoc.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===3){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupod.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===4){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoe.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===5){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }else{
                    grupof.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===6){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupog.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===7){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoh.push(nombre);
                    pintarGrupos(nombre);
                    contador=0;
                    bandera_bombo3=false;
                    bandera_bombo4=true;
                }
            }
        }
    }
    if(bandera_bombo4){
        if(existeBombo(nombre,listabombo4)){
            if(contador===0){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoa.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===1){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupob.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===2){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoc.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===3){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupod.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===4){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoe.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===5){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }else{
                    grupof.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===6){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupog.push(nombre);
                    pintarGrupos(nombre);
                    contador++;
                }
            }
            else if(contador===7){
                if(yaSalio(nombre)){
                    alertify.error("Elija uno que no haiga elegido anteriormente");
                }
                else{
                    grupoh.push(nombre);
                    pintarGrupos(nombre);
                    contador=0;
                    bandera_bombo1=false;
                    bandera_bombo2=false;
                    bandera_bombo3=false;
                    bandera_bombo4=false;
                    alertify.success("Genero el sorteo del mundial con exito "+"\n"+"presione guardar el sorteo")
                }
            }
        }
    }
}
'use strict'
angular.module('userModule')
    .controller('bombosController',function($scope,OperationsSorteoteams,$location,$route){
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
        //This function get all teams in the ranking
        $scope.getTodosEquipos = function getEquipos(){
            OperationsSorteoteams.getallTeams(function(res){
                $scope.listaTeams = res;
                localStorage.setItem("listaTeams",JSON.stringify($scope.listaTeams));
            });
        };
        //This function return a number random between of 1 and 8
        function generaRandom(inicio,final){
            var x = Math.floor((Math.random() * final) + inicio);
            return x;
        }
        var listaIndices=[];//This list has the index of the teams of the UEFA
        //This function return if the list index has the number that receive
        function existeEnIndices(num){
            for(var x=0;x<listaIndices.length;x++){
                if(listaIndices[x]===num){
                    return true;
                }
            }
            return false;
        }
        function buscarBandera(pais){
            $scope.getTodosEquipos();
            $scope.listaTeams=JSON.parse(localStorage.getItem("listaTeams"));
            for(var x=0;x<$scope.listaTeams.length;x++){
                if($scope.listaTeams[x].nombre===pais){
                    return $scope.listaTeams[x].bandera;
                }
            }
        }
        function  esAnfitrion(nombre){
            var lista=JSON.parse(localStorage.getItem("seleccionados"));
            if(lista[0].lista[0]===nombre){
                return true;
            }
            else{
                return false;
            }

        }
        //This function insert the data of the list in one table with the id that receive
        function cargarTablabombo1(lista){
            //Se encarga de cargar todas las filas a la tabla
            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            for (var j = 0; j < 4; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");

                if(esAnfitrion(lista[j].nombre)){
                    var clase = document.createAttribute("class");       // Create a "class" attribute
                    clase.value = "anfitrion";                           // Set the value of the class attribute
                    btn.setAttributeNode(clase);            }
                if(esAnfitrion(lista[j].nombre)===false){
                    var clase = document.createAttribute("class");       // Create a "class" attribute
                    clase.value = "bombo";                           // Set the value of the class attribute
                    btn.setAttributeNode(clase);
                }


                celda.appendChild(btn);
                hilera.appendChild(celda);
            }
            $("#bombop").append(hilera);
            var hilera1 = document.createElement("tr");
            var celda1 = document.createElement("td");
            for (var j = 4; j < 8; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                if(esAnfitrion(lista[j].nombre)){
                    var clase = document.createAttribute("class");       // Create a "class" attribute
                    clase.value = "anfitrion";                           // Set the value of the class attribute
                    btn.setAttributeNode(clase);            }
                if(esAnfitrion(lista[j].nombre)===false){
                    var clase = document.createAttribute("class");       // Create a "class" attribute
                    clase.value = "bombo";                           // Set the value of the class attribute
                    btn.setAttributeNode(clase);
                }
                celda1.appendChild(btn);
                hilera1.appendChild(celda1);
            }
            $("#bombop").append(hilera1);
        }//This function insert the data of the list in one table with the id that receive
        function cargarTablabombo2(lista){
            //Se encarga de cargar todas las filas a la tabla
            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            for (var j = 0; j < 4; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda.appendChild(btn);
                hilera.appendChild(celda);
            }
            $("#bombos").append(hilera);
            var hilera1 = document.createElement("tr");
            var celda1 = document.createElement("td");
            for (var j = 4; j < 8; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda1.appendChild(btn);
                hilera1.appendChild(celda1);
            }
            $("#bombos").append(hilera1);
        }//This function insert the data of the list in one table with the id that receive
        function cargarTablabombo3(lista){
            //Se encarga de cargar todas las filas a la tabla
            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            for (var j = 0; j < 4; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda.appendChild(btn);
                hilera.appendChild(celda);
            }
            $("#bombot").append(hilera);
            var hilera1 = document.createElement("tr");
            var celda1 = document.createElement("td");
            for (var j = 4; j < 8; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda1.appendChild(btn);
                hilera1.appendChild(celda1);
            }
            $("#bombot").append(hilera1);
        }
        function cargarTablabombo4(lista){
            //Se encarga de cargar todas las filas a la tabla
            var hilera = document.createElement("tr");
            var celda = document.createElement("td");
            for (var j = 0; j < 4; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda.appendChild(btn);
                hilera.appendChild(celda);
            }
            $("#bomboc").append(hilera);
            var hilera1 = document.createElement("tr");
            var celda1 = document.createElement("td");
            for (var j = 4; j < 8; j++){
                // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var btn = document.createElement("BUTTON");        // Create a <button> element
                var idBtn = document.createAttribute("id");       // Create a "class" attribute
                idBtn.value =lista[j].nombre;
                btn.setAttributeNode(idBtn);
                btn.setAttribute ("onclick","Agregar(this.id)");
                var clase = document.createAttribute("class");       // Create a "class" attribute
                clase.value = "bombo";                           // Set the value of the class attribute
                btn.setAttributeNode(clase);
                celda1.appendChild(btn);
                hilera1.appendChild(celda1);
            }
            $("#bomboc").append(hilera1);
        }
        //Decide if exist the item in one list that receive as parameter
        function existeEnIndicesbombo(bombo,num){
            for(var x=0;x<bombo.length;x++){
                if(bombo[x]===num){
                    return true;
                }
            }
            return false;
        }
        //This function charge the
        $scope.cargarBombos=function cargarBombos(){
            if($scope.bandera===true){

                $scope.listaClasificados=JSON.parse(localStorage.getItem("clasificados"));
                $scope.bombo1=$scope.listaClasificados.slice(0,8);
                $scope.bombo2=$scope.listaClasificados.slice(8,16);
                $scope.bombo3=$scope.listaClasificados.slice(16,24);
                $scope.bombo4=$scope.listaClasificados.slice(24,32);
                console.log($scope.bombo1);
                console.log($scope.bombo2);
                console.log($scope.bombo3);
                console.log($scope.bombo4);
                var listaiBombo1=[];
                var listaiBombo2=[];
                var listaiBombo3=[];
                var listaiBombo4=[];
                while(listaiBombo1.length!=8){
                    var num=generaRandom(1,8);
                    if(existeEnIndicesbombo(listaiBombo1,num)){

                    }
                    else{
                        listaiBombo1.push(num);
                    }
                }
                while(listaiBombo2.length!=8){
                    var num=generaRandom(1,8);
                    if(existeEnIndicesbombo(listaiBombo2,num)){

                    }
                    else{
                        listaiBombo2.push(num);
                    }
                }
                while(listaiBombo3.length!=8){
                    var num=generaRandom(1,8);
                    if(existeEnIndicesbombo(listaiBombo3,num)){

                    }
                    else{
                        listaiBombo3.push(num);
                    }
                }
                while(listaiBombo4.length!=8){
                    var num=generaRandom(1,8);
                    if(existeEnIndicesbombo(listaiBombo4,num)){

                    }
                    else{
                        listaiBombo4.push(num);
                    }
                }
                var bombo1=[];
                for(var x=0;x<listaiBombo1.length;x++){
                    bombo1.push($scope.bombo1[listaiBombo1[x]-1]);
                }
                var bombo2=[];
                for(var x=0;x<listaiBombo2.length;x++){
                    bombo2.push($scope.bombo2[listaiBombo2[x]-1]);
                }
                var bombo3=[];
                for(var x=0;x<listaiBombo3.length;x++){
                    bombo3.push($scope.bombo3[listaiBombo3[x]-1]);
                }
                var bombo4=[];
                for(var x=0;x<listaiBombo4.length;x++){
                    bombo4.push($scope.bombo4[listaiBombo4[x]-1]);
                }
                console.log(bombo1);
                console.log(bombo2);
                console.log(bombo3);
                console.log(bombo4);
                cargarTablabombo1(bombo1);
                cargarTablabombo2(bombo2);
                cargarTablabombo3(bombo3);
                cargarTablabombo4(bombo4);
                localStorage.setItem("bombo1",JSON.stringify(bombo1));
                localStorage.setItem("bombo2",JSON.stringify(bombo2));
                localStorage.setItem("bombo3",JSON.stringify(bombo3));
                localStorage.setItem("bombo4",JSON.stringify(bombo4));
                $scope.bandera=false;
            }
            else{
                alertify("El bombo ya fue cargado");
            }
        }
    });
