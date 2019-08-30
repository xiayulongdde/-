<?php
$con = mysqli_connect("127.0.0.1", "root", "root", "catList");

/* 获取id和active */
$id = $_REQUEST["id"];
$isActive = $_REQUEST["isActive"];
/* 编写sql语句 */
$sql = "UPDATE cat SET isActive=$isActive WHERE id='$id'";
mysqli_query($con,$sql);
?>