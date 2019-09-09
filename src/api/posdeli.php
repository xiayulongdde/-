<?php
include 'conn.php';

$id=$_REQUEST['id'];

$sql="SELECT * FROM  list WHERE cID=$id";

$result=mysqli_query($conn,$sql);

$data=array("status"=>"sucess","msg"=>"请求成功","data"=>mysqli_fetch_all($result,MYSQLI_ASSOC),true);

echo json_encode($data,true);





?>