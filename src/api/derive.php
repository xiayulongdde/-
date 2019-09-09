<?php
include 'conn.php';

$typeorder=$_REQUEST["orderType"];

if($typeorder==1){$sql="SELECT * FROM  `sott` LIMIT 0 , 60";
}
else if($typeorder==2){$sql= "SELECT * FROM  `sott`  ORDER BY  `sott`.`cID` DESC  LIMIT 30, 60";
}
else if($typeorder==3){$sql= "SELECT * FROM  `sott`  ORDER BY  `sott`.`cID` DESC  LIMIT 119 , 60";
}
else if($typeorder==4){$sql= "SELECT * FROM  `sott`  ORDER BY  `sott`.`cID` DESC  LIMIT 179 , 60";
}
else if($typeorder==5){$sql= "SELECT * FROM  `sott`  ORDER BY  `sott`.`cID` DESC  LIMIT 240 , 60";
}

$result=mysqli_query($conn,$sql);

$data=array("status"=>"sucess","msg"=>"请求成功","data"=>mysqli_fetch_all($result,MYSQLI_ASSOC),true);

echo json_encode($data,true);






?>