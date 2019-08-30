<?php

$con = mysqli_connect("127.0.0.1", "root", "root", "myCart");
$sql = "SELECT cart.*,goodList.name,goodList.press,goodList.src FROM cart , goodList WHERE cart.goodid = goodList.goodid";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>