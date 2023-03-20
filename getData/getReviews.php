<?php
  require_once 'config/connect.php';

  $reviews = mysqli_query($connect, 
    "SELECT * FROM `Справочник отзывов` 
    WHERE `публикация` = 1;"
  );

  $reviews = mysqli_fetch_all($reviews);
?>