<?php
	function sendOTP(){
		$code=rand(1000000,1111111);
		$to=$_POST['email'];
		$subject = 'Conformation Code';
		$messege = $code;
		$headers = 'From: DrAIT_Autonomous';
		mail($to,$subject,$messege,$headers);
	}
?>