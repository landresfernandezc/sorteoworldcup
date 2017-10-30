<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
function ObtenertodosEquipos(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //se declara el query
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT * FROM equipos where nombre_confederacion='$json->categoria'";

    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result=pg_query($con,$query)or die("Error de consulta");
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta=pg_fetch_all($result);
    // json_encode se encarga de convertir el array en un json(java script object notation)
    echo json_encode($respuesta);
}
function putEquipos(){
        //se importa la conexion con la base de datos
        include("../conexion.php");
        //decodifica un string a json
        $obj = file_get_contents("php://input");
        $json=json_decode($obj);
        //query de la consulta a la base de datos
        $query = "select insertar_equipo('$json->nombre','$json->puntos',"
            . "'$json->bandera','$json->estado','$json->nombre_confederacion');";
        //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
        $result = pg_query($con,$query) or die ("'estado': 1");
        //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
        $respuesta = json_encode($result);
        //se cierra la conexion ya que los datos se guardaron en la variable $result
        pg_close($con);
        echo $respuesta;
}
function postEquipos(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //decodifica un string a json
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    //query de la consulta a la base de datos
    $query = "select modificar_bandera_puntos('$json->nombre','$json->bandera','$json->puntos');";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result = pg_query($con,$query) or die ("'estado': 1");
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta = json_encode($result);
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    echo $respuesta;
}
function deleteEquipos(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //decodifica un string a json
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    //query de la consulta a la base de datos
    $query = "select modificar_estado('$json->nombre');";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result = pg_query($con,$query) or die ("'estado': 1");
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta = json_encode($result);
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    echo $respuesta;
}
?>