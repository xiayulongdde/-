<?php
#合并查询
$con = mysqli_connect("127.0.0.1", "root", "root", "catList");
$sql = "SELECT cat.*,goodList.name,goodList.src FROM cat , goodList WHERE cat.id = goodList.id";

$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>