<?php
 
    $to = "felix@sawicki.org"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "PBCA 2015 Festival Response"; 
 
    $fields = array(); 
    $fields{"name"} = "name"; 
    $fields{"email"} = "email"; 
    $fields{"phone"} = "phone"; 
	$fields{"message"} = "message";
 
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
 
    $send = mail($to, $subject, $body, $headers);
	
 
?>