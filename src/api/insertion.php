<?php
    include 'conn.php';
    #验证
    $phone=isset($_REQUEST['phone'])?$_REQUEST['phone']:'';
    $uername=isset($_REQUEST['Phone'])?$_REQUEST['Phone']:'';
    $paddword=isset($_REQUEST['Passon'])?$_REQUEST['Passon']:'';
   #登录的获取
   $logaman=isset($_REQUEST['logaman'])?$_REQUEST['logaman']:'';
   $logpaw=isset($_REQUEST['logpaw'])?$_REQUEST['logpaw']:'';
   #判断状态的数
   $num=isset($_REQUEST['num'])?$_REQUEST['num']:'';
    switch ($num) {
	 		case '1':
       $sql="SELECT *  FROM  `user` WHERE phone=$phone";		
    //    echo $sql;
             break;
			case '2':
       $sql="INSERT INTO `article`.`user` (`usrtid`, `phone`, `password`, `ertinme`)
        VALUES ('null', '$uername', '$paddword', CURRENT_TIMESTAMP)";  
    // echo $sql;
             break;
            case 'text3':
             $sql = "SELECT * FROM `user` WHERE phone=$logaman AND password	=$logpaw'";
            //  echo $sql;
             break; 	
          }


$res = $conn->query($sql);
    if($num == '1'){
        if($res->num_rows) {
        //查到，不给注册
            echo 'no';
        }else {
         echo 'yes';
        }
    }else if($num == '2'){
        if($res->num_rows){
            echo 'no';
        }else{
            echo 'yes';
        }
    }else if($num == 'text3'){
        if($res){
            echo 'yes';
        }else{
            echo 'no';
        }
    }
?>