<?php
include 'conn.php';

$sql="SELECT * FROM  conn";


$result=mysqli_query($conn,$sql);

$Liscount=mysqli_num_rows($result);

$couet=6;

$pageCount=ceil($Liscount/$couet);

$data=array("status"=>"sucess","msg"=>"获取成功","data"=>array("count"=>$pageCount),true);

echo json_encode($data,true);
?>