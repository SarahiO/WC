<?php
$to ="sarah.oluyede@willowsv.com";
$subject = "Enquiry";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$contactnumber =$_REQUEST['contactnumber'];
$comments = $_REQUEST['comments'];
$sent = mail($to, $subject, "Name: $name \n Company: $company \n Email Address: $email \n Contact Number: $contactnumber \n Enquiry: $comments");
if($sent)
    header('Location: thankyoucontact.html');
else
    header('Location: errorcontact.html');
    
?>