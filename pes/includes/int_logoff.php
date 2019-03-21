<?php
	session_start();
	unset($_SESSION['int_email']);
	echo "<script>window.open('../internal/login.php','_self');</script>";
?>