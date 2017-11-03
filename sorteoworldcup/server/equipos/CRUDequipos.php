<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
//This end point get all teams to category
function ObtenertodosEquipos(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT * FROM equipos where nombre_confederacion='$json->categoria'";
    $result=pg_query($con,$query)or die("Error de consulta");
    pg_close($con);
    $respuesta=pg_fetch_all($result);
    echo json_encode($respuesta);
}//This end point Get all teams
function ObtenertodosEquiposMundial(){
    include("../conexion.php");
    $query="SELECT * FROM equipos";
    $result=pg_query($con,$query)or die("Error de consulta");
    pg_close($con);
    $respuesta=pg_fetch_all($result);
    echo json_encode($respuesta);
}
//This end point put one team in the database
function putEquipos(){
        include("../conexion.php");
        $obj = file_get_contents("php://input");
        $json=json_decode($obj);
        $query = "select insertar_equipo('$json->nombre','$json->puntos',"
            . "'$json->bandera','$json->estado','$json->nombre_confederacion');";
        $result = pg_query($con,$query) or die ("'estado': 1");
        $respuesta = json_encode($result);
        pg_close($con);
        echo $respuesta;
}
//This end point update a team in the database
function postEquipos(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query = "select modificar_bandera_puntos('$json->nombre','$json->bandera','$json->puntos');";
    $result = pg_query($con,$query) or die ("'estado': 1");
    $respuesta = json_encode($result);
    pg_close($con);
    echo $respuesta;
}//This function delete a team
function deleteEquipos(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query = "select modificar_estado('$json->nombre');";
    $result = pg_query($con,$query) or die ("'estado': 1");
    $respuesta = json_encode($result);
    pg_close($con);
    echo $respuesta;
}
?>