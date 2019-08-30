<?php

$con = mysqli_connect("127.0.0.1", "root", "root", "myCart");
$goodid = $_REQUEST["goodid"];
$sql = "DELETE FROM cart  WHERE goodid='$goodid'";
mysqli_query($con, $sql);
?>