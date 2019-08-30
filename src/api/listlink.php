<?php

include 'conn.php';

$json=file_get_contents("comt.json");
// var_dump($json);

$data=json_decode($json,true);


for($i=0;$i<count($data);$i++){
    $src=$data[$i]["src"];
    $insor=$data[$i]["insor"];
    $Angell=$data[$i]["Angell"];
   $collect=$data[$i]["collect"];
$sql="INSERT INTO  `article`.`sott` (`cID` ,`src` , `insor` , `Angell` ,  `collect`)VALUES (
  'null',  '$src',  '$insor',  '$Angell',  '$collect' )";
  mysqli_query($conn,$sql);
}


  

?>