<?php

  require_once 'config/connect.php';

  $name = $_POST['name'];
  $email = $_POST['email'];
  $question = $_POST['question'];
  $time = date("Y-m-d H:i:s");

  mysqli_query($connect, 
  "INSERT INTO `Справочник вопросов` (`id вопроса`, `имя`, `e-mail`, `вопрос`, `время`) 
  VALUES (NULL, '$name', '$email', '$question', '$time')");

  header('Location: ../contacts.php');
?>