<?php
include 'conn.php';//引入文件

$id=isset($_REQUEST['id'])?$_REQUEST['id']:"";

$numval=isset($_REQUEST['numval'])?$_REQUEST['numval']:"";

$otable=isset($_REQUEST['otable'])?$_REQUEST['otable']:"";

$Sql="UPDATE  car SET num='$numval',toall ='$otable' WHERE `goodid`=$id";

$result=mysqli_query($conn,$Sql);

  if($result) {
      echo 'yes';
  }else{
      echo 'no';
    }

?>