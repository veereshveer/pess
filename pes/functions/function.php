<?php
	session_start();
	require_once('../db/db.php');
	if(isset($_GET['addgrp']) and isset($_SESSION['grp'])){
		$id=$_GET['addgrp'];
		$query=mysqli_query($con,"update std_details set group_name='$_SESSION[grp]' where usn='$id'")or die("not working");
		echo "<script>window.open('../internal/stdgrp.php','_self')</script>";
	}
	else if(isset($_GET['rmgrp'])){
		$id=$_GET['rmgrp'];
		$query=mysqli_query($con,"update std_details set group_name='' where usn='$id'")or die("not working");
		echo "<script>window.open('../internal/stdgrp.php','_self')</script>";
	}else{
		echo "<script>alert('Select Group Name First')</script>";
		echo "<script>window.open('../internal/stdgrp.php','_self')</script>";
	}
?>