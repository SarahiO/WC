<?php
$to ="sarah.oluyede@willowsv.com";
$subject = "Enquiry";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$contactnumber =$_REQUEST['contactnumber'];
$comments = $_REQUEST['comments'];
$sent = mail($to, $subject, "$name \n $company \n $email \n $contactnumber \n $comments");
if($sent)
    {print "Thank you for your enquiry"; }
else
    {print "We encountered an error sending your enquiry"; }
?>