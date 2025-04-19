<?php

$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$message = $_POST['message'];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "niaangeline9@gmail.com";

mail($recipient, $message, $mailheader)
or die("Error!");

echo "message sent";

?>