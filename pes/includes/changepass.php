<?php
	session_start();
	require_once('../db/db.php');
	require_once('../includes/head.php');
	if(isset($_GET['int'])){
		echo "<body>";
		 require_once("../includes/header.php");
		echo "
		<div style='width:100%;background-color:grey;'>
			<div class='container text-center' style='margin-top:115px;width:530px;background-color:white;padding:30px;'>
				<form method='post'>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-user'></i></span>
						<input class='form-control' name='email' placeholder='E-Mail'/></br></br>
					</div>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>
						<input class='form-control' name='pwd' type='password' placeholder='Old Password'/></br></br>
					</div>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>
						<input class='form-control' name='newpwd' type='password' placeholder='New Password'/></br></br>
					</div>
							<input class='form-control' type='submit' name='chpwd' value='submit'/>
				</form>
			</div>
		</div>
		</body>
		";
		if(isset($_POST['chpwd'])){
			$check=mysqli_query($con,"select * from int_reg where email ='$_POST[email]' and password = '$_POST[pwd]'");
			$check_num = mysqli_num_rows($check);
			if($check_num){
				$query=mysqli_query($con,"update int_reg set password='$_POST[newpwd]' where email='$_SESSION[int_email]'")or die("not working");
				echo "<script>alert('Password Changed for an Internal');</script>";
				echo "<script>window.open('../internal/home.php','_self')</script>";
			}else{
				echo "<script>alert('Email Password Missmatch!!');</script>";
				echo "<script>window.open('../internal/home.php','_self')</script>";
			}
		}
	}
	else if(isset($_GET['ext'])){
		echo "
		<body>
		<div style='width:100%;background-color:skyblue;'>
			<div class='container text-center' style='margin-top:115px;width:530px;background-color:white;padding:30px;'>
				<form method='post'>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-user'></i></span>
						<input class='form-control' name='email' placeholder='E-Mail'/></br></br>
					</div>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>
						<input class='form-control' name='pwd' type='password' placeholder='Old Password'/></br></br>
					</div>
					<div class='input-group' style='padding:7px'>
						<span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>
						<input class='form-control' name='newpwd' type='password' placeholder='New Password'/></br></br>
					</div>
							<input class='form-control' type='submit' name='chpwd' value='submit'/>
				</form>
			</div>
		</div>
		</body>
		";
		if(isset($_POST['chpwd'])){
			$check=mysqli_query($con,"select * from ext_reg where email ='$_POST[email]' and password = '$_POST[pwd]'");
			$check_num = mysqli_num_rows($check);
			if($check_num){
				$query=mysqli_query($con,"update ext_reg set password='$_POST[newpwd]' where email='$_SESSION[ext_email]'")or die("not working");
				echo "<script>alert('Password Changed for an External');</script>";
				echo "<script>window.open('../external/home.php','_self')</script>";
			}else{
				echo "<script>alert('Email Password Missmatch!!!');</script>";
				echo "<script>window.open('../external/home.php','_self')</script>";
			}
		}
	}
?>