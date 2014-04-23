<?php

if(isset($_GET))
{
	if(isset($_GET['email']))
	{
		$email = substr($_GET['email'], 0, 256);

                $ip = $_SERVER['REMOTE_ADDR'];

                $to = 'charles@calculatedcontent.com';
                $subject = 'CC New User interested in Calculated Content';
                $body = <<< BODY
New email address: $email
___________________________
From IP $ip
Shake and Bake
BODY;
                mail($to, $subject, $body);
                die();
	}
}

?>