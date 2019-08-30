<?php
include 'conn.php';

#导入json文件
$json=file_get_contents("zhe800list.json");
// echo $json;

#转为关联数组形式
$data=json_decode($json,true);
// var_dump($data);


for($i=1;$i<count($data);$i++){
$lprice=$data[$i]["list_price"];
$sprice=$data[$i]["sale_price"];
$src=$data[$i]["src"];
$title=$data[$i]["title1"];
$time=$data[$i]["active_type"];

$sql="INSERT INTO `article`.`super` (`gID`, `title1`, `src`, `lprice`, `sprice`, `time`)
 VALUES ('null', '$title', '$src', '$lprice', '$sprice', '$time')";
mysqli_query($conn,$sql);
}







?>

