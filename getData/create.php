<?php

require_once 'config/connect.php';

$name = $_POST['name'];
$rating = $_POST['rating'];
$review = $_POST['review'];
$time = date("Y-m-d H:i:s");


mysqli_query($connect, 
"INSERT INTO `Справочник отзывов` (`id отзыва`, `имя`, `рейтинг`, `отзыв`, `время`, `публикация`) 
VALUES (NULL, '$name', '$rating', '$review', '$time', NULL)");

header('Location: ../review.php');

?>