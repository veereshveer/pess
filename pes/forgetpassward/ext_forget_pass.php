<?php
	require_once('../includes/head.php');
	require_once('../db/db.php');
?>
	</head>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<img src="../images/user.png" alt="user" width="180px" height="180px" class="img img-circle" />
			<form method="post">
				<div>
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<input class="form-control" title="Username Must Contain Minimum 4 Charectors" placeholder="Username" type="Text" name="uname" pattern=".{4,10}" required /><br/>		
					</div>
					
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
						<input class="form-control" placeholder="Email" type="email" name="email" required /><br/>
					</div>
					<div class="text-right" style="margin-right:6px">
					<input type="submit" class="btn btn-warning" name="send" value="Send"/>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>
<?php
	if(isset($_POST['send']) and (isset($_POST['uname'])) and (isset($_POST['email']))){
		$exec = mysqli_query($con,"select * from ext_reg where email = '$_POST[email]' and username='$_POST[uname]'") or die("not workin in query");
		$count = mysqli_num_rows($exec);
		if($count){
			$data = mysqli_fetch_array($exec);
			$to=$_POST['email'];
			$subject = 'Your Password is:';
			$messege = $data[2];
			$headers = 'From: DrAIT_Autonomous';
			mail($to,$subject,$messege,$headers);
			echo "<script>alert('Password is sent to your email.')</script>";
			echo "<script>window.open('../external/login.php','_self')</script>";
		}else{
			echo "<script>alert('username or emaiil missmatch!')</script>";
		}
	}
?>