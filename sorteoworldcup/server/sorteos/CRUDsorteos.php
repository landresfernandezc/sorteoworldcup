<?php
if(function_exists($_REQUEST['Funcion'])){
    $_REQUEST['Funcion']();
}
else
{
    echo 'La funcion no ha sido creada: Comuniquese';
}
//This end point get the groups in a lot
function ObtenertodosGrupos(){
    include("../conexion.php");
    $obj = file_get_contents("php://input");
    $json=json_decode($obj);
    $query="SELECT * from posiciones_equipo where id_sorteo='$json->id'";
    $result=pg_query($con,$query)or die("Error de consulta");
    pg_close($con);
    $respuesta=pg_fetch_all($result);
    echo json_encode($respuesta);
}//This end point get the lots
function ObtenertodosSorteosMundial(){
    include("../conexion.php");
    $query="SELECT * FROM sorteos";
    $result=pg_query($con,$query)or die("Error de consulta");
    pg_close($con);
    $respuesta=pg_fetch_all($result);
    echo json_encode($respuesta);
}
//This end point put a lot
function putSorteos(){
        include("../conexion.php");
        $obj = file_get_contents("php://input");
        $json=json_decode($obj);
        $query = "select insertar_sorteo('$json->nombre_usuario','$json->fecha',"
            . "'$json->au','$json->ad','$json->at','$json->ac',"
            . "'$json->bu','$json->bd','$json->bt','$json->bc',"
            . "'$json->cu','$json->cd','$json->ct','$json->cc',"
            . "'$json->du','$json->dd','$json->dt','$json->dc',"
            . "'$json->eu','$json->ed','$json->et','$json->ec',"
            . "'$json->fu','$json->fd','$json->ft','$json->fc',"
            . "'$json->gu','$json->gd','$json->gt','$json->gc',"
            . "'$json->hu','$json->hd','$json->ht','$json->hc');";
        $result = pg_query($con,$query) or die ("'estado': 1");
        $respuesta = json_encode($result);
        pg_close($con);
        echo $respuesta;
}
?>