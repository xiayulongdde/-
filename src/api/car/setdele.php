<?php
include 'conn.php';//引入文件

$id=isset($_REQUEST['id'])?$_POST['id']:"";

$sql="DELETE  FROM car WHERE goodid=$id ";

$result=mysqli_query($conn,$sql);

if($result){
    echo 'yes';
}else{
    echo 'no';
}









?>