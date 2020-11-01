<?php
  $name = trim(strip_tags($_POST["name"]));
  $email = trim(strip_tags($_POST["email"]));
  $package = trim(strip_tags($_POST["packages"]));
  $subject = "Новый заказ на сайте url_вашего_сайта";
  $msg = "Ваши данные формы регистрации:\n" ."Имя: $name\n" ."Ваш email: $email\n" ."Пакет: $packages";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: \n""$email\n"" <7koteyka7@gmail.com>" . "\r\n";
  $headers .= "Bcc: 7koteyka7@gmail.com". "\r\n";
  if(!empty($name) && !empty($email) && !empty($package) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    }
?>