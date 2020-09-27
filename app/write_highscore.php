<?php
require_once 'db.php';
if (isset($_POST['name'])) {
  $user_name = $_POST['name'];
} else {
  $user_name = "Mystery user";
}
if (isset($_POST['score'])) {
  $user_score = $_POST['score'];
} else {
  $user_score = 0;
}
$table = 'highscore';

try{
  $sql = "INSERT INTO  highscore  (name, score)
    VALUES ('$user_name', '$user_score')";
  $conn->exec($sql);
} catch (PDOException $e) {
  echo $e;
}