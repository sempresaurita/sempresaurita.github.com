<?php
	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		//redirect to the homepage
		header("Location: /");
		return;
	}
	

	function send_simple_message($name, $email, $message) {
	  $ch = curl_init();

	  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	  curl_setopt($ch, CURLOPT_USERPWD, 'api:key-41rhm9bi90okf783z9atlzzjv6445iy6');
	  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
	  curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v2/app8410243.mailgun.org/messages');
	  curl_setopt($ch, CURLOPT_POSTFIELDS, array('from' => $name . ' <' . $email . '>',
	                                             'to' => 'antonellatezza@gmail.com',
	                                             'subject' => 'Contact from antonellatezza.com',
	                                             'text' => $message));

	  $result = curl_exec($ch);
	  curl_close($ch);

	  return $result;
	}

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	send_simple_message($name, $email, $message);
?>