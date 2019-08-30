<?php
$con = mysqli_connect("127.0.0.1","root","root","myCart");

$json = file_get_contents("data.json");
$data = json_decode($json,true);

for ($i = 0; $i < count($data); $i++) {
  $name = $data[$i]["name"];
  $price = $data[$i]["price"];
  $src = $data[$i]["src"];
  $press = $data[$i]["press"];
  $discuss = $data[$i]["discuss"];

  $sql = "INSERT INTO `goodList` (`goodid`, `name`, `price`, `src`, `press`, `discuss`) 
 VALUES (NULL, '$name', '$price', '$src', '$press', '$discuss')";
 echo  $sql;
  mysqli_query($con, $sql);
}

?>