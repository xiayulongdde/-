<?php
include 'conn.php';

$id= $_REQUEST["index"];

 if($id==0){
$sql="SELECT * FROM  `list`";    
 }else if($id==2){
 $sql="SELECT * FROM  `list` ORDER BY  `list`.`promotion` ASC";
}else if($id==3){
 $sql="SELECT * FROM  `list` ORDER BY  `list`.`promotion` DESC";
}else if($id==1){
    $sql="SELECT *  FROM  `list` ORDER BY `list`.`iprice` ASC";
}

 $result=mysqli_query($conn,$sql);
    
$data=array("status"=>"sucess","msg"=>"请求成功","data"=>mysqli_fetch_all($result,MYSQLI_ASSOC),true);
    
echo json_encode($data,true)



?>