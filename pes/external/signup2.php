<?php
	error_reporting();
	session_start();
	if(isset($_POST['generate'])){
		require_once('../db/db.php');
		$query="select * from ext_details where email = '$_POST[email]'";
		$exec=mysqli_query($con,$query) or die("Error");
		$count=mysqli_num_rows($exec);
		if($count == 1){
		    
		     
		    $q="select * from ext_reg where email = '$_POST[email]'";
		    $qur=mysqli_query($con,$q) or die("Error");
		    $chk=mysqli_num_rows($qur);
		    if($chk == 0){
		    
		$code=rand(1000000,1111111);
		$to=$_POST['email'];
		$subject = 'Conformation Code';
		$messege = $code;
		$headers = 'From: noreply';
		@mail($to,$subject,$messege,$headers);
		require('../includes/head.php');
		
	/*if(isset($_POST['generate'])){
		$_SESSION['uname'] = $_POST['uname'];
		$_SESSION['pwd'] = $_POST['pwd'];
		$_SESSION['email'] = $_POST['email'];
		require_once('../Functions/sendOTP.php');
		sendOTP();
		require('../Includes/head.php');*/
?>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<img src="../images/user.png" alt="user" width="180px" height="180px" class="img img-circle" />
			<form action="" method="post">
				<div>
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<?php
						$uname=$_POST['uname'];
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
		    }else{
		        echo "<script>alert('Already Registered!');</script>";
		        echo "<script>window.open('signup.php','_self');</script>";
		    }
	}else{
		echo "<script>alert('Email You Entered is not permited');</script>";
		echo "<script>window.open('signup.php','_self');</script>";
	}
	}else if(isset($_POST['submit'])){
		require_once('../db/db.php');
		$uname=$_SESSION['uname'];
		$pwd=$_SESSION['pwd'];
		$email=$_SESSION['email'];
		require_once('../functions/sendOTP.php');
		$exec = mysqli_query($con,"insert into ext_reg values('$email','$uname','$pwd')") or die("Error");
		if($exec){
			echo "Account Created!";
			session_destroy();
			session_start();
			$_SESSION['int_email']=$email;
			$_SESSION['int_user']=$uname;
			echo "<script>window.open('home.php','_self');</script>";
		}
		else{
			echo "Account Already Exist!";
			echo "<script>window.open('login.php','_self');</script>";
		}
	}
	else{
		echo "<script>window.open('signup.php','_self');</script>";
	}
/*
	}
	else{
		echo "<script>window.open('signup.php','_self');</script>";
	}
	*/
?>