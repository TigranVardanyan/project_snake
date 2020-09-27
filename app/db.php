<?php
//$servername = "localhost";
//$dbname = 'tigva203_snake';
//$username = "tigva203_admin";
//$password = "123321AbbA";
$servername = "localhost";
$dbname = 'snake';
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
  echo "Connection failed: " . $e->getMessage();
}
?>