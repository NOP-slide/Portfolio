<?php
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'portfolio@github.com';
$email_subject = "New Form submission";
$email_body = "You have received a new message from $name.\n".
    "Here is the message:\n $message".
    
$to = "phelps.andrewj@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: portfolio@github.com  \r\n";

mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');
?> 