<?php
// Check for empty fields
if(empty($_POST['name']) ||
    empty($_POST['email'])     ||
    empty($_POST['location'])  ||
    empty($_POST['phone'])     ||
    empty($_POST['message'])   ||
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
    {
    echo "No arguments Provided!";
    return false;
    }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$location = strip_tags(htmlspecialchars($_POST['location']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'sean.philippi@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "QUBTX.com Contact Form:  ".$name;
$email_body = "You have received a new message from your QUBTX.com contact form.\n\nHere are the details:\n\nName: ".$name."\n\nEmail: ".$email_address."\n\nLocation: ".$location."\n\nPhone: ".$phone."\n\nMessage:\n".$message;
$headers = "From: noreply@qubtx.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: ".$email_address;
mail($to, $email_subject, $email_body, $headers);
return true;
?>

// email server i will be using, gmail
// userid and password