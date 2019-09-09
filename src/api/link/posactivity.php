<?php
include 'conn.php';

$json=file_get_contents("list.json");

$data=json_decode($json,true);

for($i=0;$i<count($data);$i++){
$src=$data[$i]["src"];  
$text=$data[$i]["text"];
$promotion=$data[$i]["promotion"];
$lprice=$data[$i]["lprice"];
$iprice=$data[$i]["iprice"];
$sold=$data[$i]["sold"];

$sql="INSERT INTO  `article`.`list` ( `cID` ,  `src` ,   `text` , `promotion` , `lprice` ,`iprice` ,  `sole`  )
    VALUES ( 'null',  '$src',  '$text',  '$promotion',  '$lprice=',  '$iprice',  '$sold')";
mysqli_query($conn,$sql);
}







?>