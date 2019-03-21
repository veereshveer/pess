<?php
	session_start();
	require_once('../db/db.php');
	require_once('../includes/head.php');
?>
	</head>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<div>
				<img src="../images/user.png" alt="user" width="180px" height="180px" class="img img-circle" />
				<form method="post">
					<div class="input-group" style="padding:7px">
					<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
					<input class="form-control" type="email" placeholder="EMail" name="email" required/>
					</div>
					<div class="input-group" style="padding:7px">
					<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
					<input class="form-control" type="password" placeholder="Password" name="pwd" pattern=".{7,}" title="Minimum 7 digit" required/>
					</div>
					<br/>
					<input style="padding:5px" class="btn btn-info form-control" type="submit" value="SIGN IN" name="login"/>
					<br/>
					<br/>
					<label class="text-center"><a style="color:gray" href="../forgetpassward/ext_forget_pass.php?ext">Forget Password</a></label><br/>
					<label class="text-center"><a style="color:gray" href="signup.php">Sign Up</a></label>
				</form>
			</div>
		</div>
	</body>
</html>
<?php
	if(isset($_POST['login'])){
		$email = $_POST['email'];
		$pwd = $_POST['pwd'];
		$query=mysqli_query($con,"select * from ext_reg where email ='$email' and password = '$pwd'") or die("Not workin in qry");
		
		if(mysqli_num_rows($query)){
			$_SESSION['ext_email']=$_POST['email'];
			$username=mysqli_fetch_row($query);
			$_SESSION['ext_user']=$username[1];
			echo "<script>alert('Login Successful!');</script>";
			echo "<script>window.open('home.php','_self')</script>";
		}
		else{
			echo "<script>alert('Email or Password Missmatch!');</script>";
			echo "<script>window.open('login.php','_self')</script>";
		}
	}
?>