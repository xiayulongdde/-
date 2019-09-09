<?php
    include 'conn.php';
    #获取页面值
    // $phone=isset($_REQUEST['phone'])?$_REQUEST['phone']:'';
     $uram=isset($_REQUEST['logaman'])?$_REQUEST['logaman']:"";
     #获取页面值
    $pass=isset($_REQUEST['logpaw'])?$_REQUEST['logpaw']:"";
    #sqlyuju
    $sql = "SELECT * FROM `user` WHERE phone=$uram AND password=$pass";

     #得到数字集合
     $res=mysqli_query($conn,$sql);
     if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>