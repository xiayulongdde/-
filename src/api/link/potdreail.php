<?php

include 'conn.php';

$json=file_get_contents("dreail.json");

$data=json_decode($json,true);

for($i=0;$i<count($data);$i++){
    $simg=$data[$i]["smlimg"];
    $Ceconimg=$data[$i]["Seconimg"];
    $sql="INSERT INTO  `article`.`dreail` (`goodid` ,`simg` , `Ceconimg`  )VALUES ( 'null',  '$simg',  ' $Ceconimg' )";
    mysqli_query($conn,$sql);
}






?>