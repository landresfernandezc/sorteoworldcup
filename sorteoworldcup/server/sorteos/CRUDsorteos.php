<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
function ObtenertodosGrupos(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //se declara el query
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT * from posiciones_equipo where id_sorteo='$json->id'";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result=pg_query($con,$query)or die("Error de consulta");
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta=pg_fetch_all($result);
    // json_encode se encarga de convertir el array en un json(java script object notation)
    echo json_encode($respuesta);
}
function ObtenertodosSorteosMundial(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //se declara el query
    $query="SELECT * FROM sorteos";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result=pg_query($con,$query)or die("Error de consulta");
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta=pg_fetch_all($result);
    // json_encode se encarga de convertir el array en un json(java script object notation)
    echo json_encode($respuesta);
}

function putSorteos(){
        //se importa la conexion con la base de datos
        include("../conexion.php");
        //decodifica un string a json
        $obj = file_get_contents("php://input");
        $json=json_decode($obj);
        //query de la consulta a la base de datos
        $query = "select insertar_sorteo('$json->nombre_usuario','$json->fecha',"
            . "'$json->au','$json->ad','$json->at','$json->ac',"
            . "'$json->bu','$json->bd','$json->bt','$json->bc',"
            . "'$json->cu','$json->cd','$json->ct','$json->cc',"
            . "'$json->du','$json->dd','$json->dt','$json->dc',"
            . "'$json->eu','$json->ed','$json->et','$json->ec',"
            . "'$json->fu','$json->fd','$json->ft','$json->fc',"
            . "'$json->gu','$json->gd','$json->gt','$json->gc',"
            . "'$json->hu','$json->hd','$json->ht','$json->hc');";
        //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
        $result = pg_query($con,$query) or die ("'estado': 1");
        //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
        $respuesta = json_encode($result);
        //se cierra la conexion ya que los datos se guardaron en la variable $result
        pg_close($con);
        echo $respuesta;
}

?>