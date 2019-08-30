<?php
$con = mysqli_connect("127.0.0.1", "root", "root", "catList");

/* 需要往数据库中插入一条数据 */
/* (1) 检查购物车中是否存在指定的商品，如果存在那么就更新数量 */
/* (2) 如果购物车中不存在指定的商品，那么就加入一条新的数据 */
$id = $_REQUEST["id"];
$price = $_REQUEST["price"];
$sql = "SELECT * FROM cat WHERE id = '$id'";
$result = mysqli_query($con,$sql);

$responseObj = array("status"=>"","msg"=>"");
if(mysqli_num_rows($result) == 0)
{
  /* 计算价格 */
  $totalPrice = $price;
  /* 插入 */
  $insetSql = "INSERT INTO `cat` (`catID`, `id`, `num`, `total`,`price`,`isActive`) VALUES (NULL, '$id', 1, '$price','$totalPrice',1)";
  // echo "执行插入操作";
  // echo $insetSql;
  mysqli_query($con, $insetSql);

}elseif(mysqli_num_rows($result) == 1){

    /* 先查询先前的内容 + 1 */
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $num = $data[0]["num"] + 1;
    $total = $data[0]["price"] * $num;
    
    /* 更新 */
    $updateSql = "UPDATE cat SET num='$num',total='$total' WHERE id=' $id'"; 
    mysqli_query($con,$updateSql);
}


/* 查询返回购物车中商品的数量 */
$getCountSql = "SELECT * FROM cat";
$count = mysqli_num_rows(mysqli_query($con, $getCountSql));
$responseObj["status"] = "success";
$responseObj["msg"] = "添加成功";
$responseObj["data"] = array("count"=> $count);
echo json_encode($responseObj, true);
?>