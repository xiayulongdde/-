<?php

include 'conn.php';

$json=file_get_contents("introdu.json");

$data=json_decode($json,true);

for($i=1;$i<count($data);$i++){
$price=$data[$i]["price"];
$img=$data[$i]["src"];
$introduce=$data[$i]["introduce"];
$text=$data[$i]["text"];

$sql="INSERT INTO  `article`.`conn` ( `gID` ,  `cID` ,  `price` ,`src` , `introduce` ,  `text`  )
VALUES (  'null',  '$i',  '$price',  '$img',  '$introduce',  '$text' )";
    
mysqli_query($conn,$sql);
}




?>