<?php
	$uname = 0;
	$pwd = 0 ;
	$email = 0;
	if(isset($_POST['generate'])){
	require_once('../functions/sendOTP.php');
	sendOTP();
	require('../includes/head.php');
?>
	</head>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<img src="../images/user.png" alt="user" width="180px" height="180px" class="img img-circle" />
			<form action="" method="post">
				<div>
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<?php
						$_GLOBAL['uname']=$_POST['uname'];
						echo "<input class='form-control' value='$uname' type='Text' name='uname' disabled/><br/>";		
						?>
					</div>
					<div class="input-group" style="padding:7px">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
						<?php
						$pwd=$_POST['uname'];
						echo "<input class='form-control' value='$pwd' type='password' name='pwd' disabled/><br/>";		
						?>
					</div>
					
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
						<?php
						$email=$_POST['email'];
						echo "<input class='form-control' value='$email' type='email' name='email' disabled/><br/>";		
						?>
					</div>
					
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
						<input class="form-control" placeholder="Conformation Code" type="password" name="ccode" required /><br/>
					</div>
					<br/>
					<div class="text-right" style="margin-right:6px">
						<input type="submit" class="btn btn-danger" name="submit" value="SIGN UP"/>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>
<?php
	}else if(isset($_POST['submit'])){
		require_once('../db/db.php');
		$uname = $_POST['uname'];
		$pwd = $_POST['pwd'];
		$email = $_POST['email'];
		$exec = mysqli_query($con,"insert into int_reg values($uname,$pwd,$email)");
		echo $exec."Executed";
		echo $uname;
	}
	else{
		echo "<script>window.open('signup.php','_self');</script>";
	}
?>