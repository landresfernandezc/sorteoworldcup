<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
//This end point return if the user exist in the database
function ObtenertodosUsuarios(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT count(*) as counta FROM usuarios where nombre_usuario='$json->nombre_usuario' and contraseña='$json->clave'";
    $result=pg_query($con,$query)or die("Error de consulta");
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
}
//This function put a user in the database
function putUsuarios(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query = "select insertar_usuario('$json->nombre','$json->apellido1',"
        . "'$json->apellido2','$json->clave','$json->fecha','$json->nombre_usuario');";
    $result = pg_query($con,$query) or die ("'estado': 1");
    $respuesta = json_encode($result);
    pg_close($con);
    echo $respuesta;
}
?>