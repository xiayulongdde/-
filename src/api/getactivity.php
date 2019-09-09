<?php

include 'conn.php';

$sql="SELECT * FROM  `list`";

$result=mysqli_query($conn,$sql);

$data=array("status"=>"sucess","msg"=>"请求成功","data"=>mysqli_fetch_all($result,MYSQLI_ASSOC),true);

echo json_encode($data,true);






?>