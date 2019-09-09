<?php
include 'conn.php';//引入文件
// 商品id
$commid= isset($_REQUEST['goodid'])? $_REQUEST['goodid']:"" ;
// 活动前价格
$lprice=isset($_REQUEST["lprice"])?$_REQUEST["lprice"]:"" ;
// 活动后价格
$promotion=isset($_REQUEST["promotion"])?$_REQUEST["promotion"]:""  ;
//商品介绍
$text=isset($_REQUEST['text'])?$_REQUEST['text']:'';
//商品路径
$src=isset($_REQUEST['src'])?$_REQUEST['src']:'';

// #分两种情况处理
$sql="SELECT * FROM  car WHERE 	commid='$commid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_num_rows($result);
if($row == 0)
{
 $insetsql="INSERT INTO  `article`.`car` ( `goodid` ,  `num` , `ipeice` , `lprice` ,  `toall` , `commid` ,  `text` ,  `src`) VALUES 
 ( NUll,  1,  '$promotion',  '$lprice',  '$promotion',  '$commid',  '$text',  '$src'  )";
$result=mysqli_query($conn,$insetsql);
}elseif($row == 1){
#更新数据
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
$num=$data[0]["num"]+1;
$toall=$data[0]['toall']*$num;
//更新
$updatSql="UPDATE car SET num='$num', toall='$toall' WHERE commid='$commid'";
$result=mysqli_query($conn,$updatSql);
}
$totalCout="SELECT * FROM car ";
$result=mysqli_query($conn,$totalCout);
$row=mysqli_num_rows($result);
echo'{"tatalROW":'.$row.'}';

?>