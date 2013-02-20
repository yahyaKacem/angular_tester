<?php
mysql_connect('localhost', 'root', 'yujikol');
mysql_select_db('test');
var_dump($_POST);die();
if(isset($_POST["name"]) && $_POST['name'] != ""){
  $name   = $_POST['name'];
  $date   = time();
  $data   = array();
  if(mysql_query("INSERT INTO `items` (`name`, `creation_date`)VALUES ('$name', '$date');")){
    $query = mysql_query("SELECT * FROM `items`");
    while($result = mysql_fetch_assoc($query)){
      $data["data"][] = $result;
    }
    $data["status"] = TRUE;
  }else{
    $data["status"] = FALSE;
  }
  echo json_encode($data);
}else{
  header('Location: post_test.php');
}
