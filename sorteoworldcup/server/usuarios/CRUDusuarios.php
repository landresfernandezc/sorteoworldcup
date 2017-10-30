<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
function ObtenertodosUsuarios(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //se declara el query
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT count(*) as counta FROM usuarios where nombre_usuario='$json->nombre_usuario' and contraseña='$json->clave'";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result=pg_query($con,$query)or die("Error de consulta");
    //se cierra la conexion ya que los datos se guardaron en la variable $result

    $counta=pg_num_rows($result);

    $row=pg_fetch_array($result);
    $contador=$row['counta'];
    pg_close($con);
    if($contador>0){
        $arr =array(
                "success" => true
                   );
        echo json_encode($arr);
    }
    else{
        $arr =array(
            "success" => false
        );
        echo json_encode($arr);
    }
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    //$respuesta=pg_fetch_all($result);
    // json_encode se encarga de convertir el array en un json(java script object notation)
   // echo json_encode($respuesta);
}
function putUsuarios(){
    //se importa la conexion con la base de datos
    include("../conexion.php");
    //decodifica un string a json
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $timestamp = date('Y-m-d G:i:s');
    //query de la consulta a la base de datos
    $query = "select insertar_usuario('$json->nombre','$json->apellido1',"
        . "'$json->apellido2','$json->clave','$json->fecha','$json->nombre_usuario');";
    //pg_query se encarga de ejecutar el query mediante la conexion y el query y  se encarga de realizar la consulta a la base y generar una tabla
    $result = pg_query($con,$query) or die ("'estado': 1");
    //pg_fetch_all se encarga de retornar un array con filas y columnas de la tabla que se creo con el query
    $respuesta = json_encode($result);
    //se cierra la conexion ya que los datos se guardaron en la variable $result
    pg_close($con);
    echo $respuesta;
}
?>