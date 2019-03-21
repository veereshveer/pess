<?php
	session_start();
	unset($_SESSION['ext_email']);
	echo "<script>window.open('../external/login.php','_self');</script>";
?>