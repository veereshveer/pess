<?php
	require('../includes/head.php');
?>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<img src="../images/user.png" alt="user" width="180px" height="180px" class="img img-circle" />
			<form action="signup2.php" method="post">
				<div>
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<input class="form-control" title="Username Must Contain Minimum 4 Charectors" placeholder="Username" type="Text" name="uname" pattern=".{4,10}" required /><br/>		
					</div>
					<div class="input-group" style="padding:7px">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
						<input class="form-control" title="Password Must Contain Minimum 7 Digits" placeholder="Password" type="password" name="pwd" pattern="{7,15}" required /><br/>
					</div>
					
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
						<input class="form-control" placeholder="Email" type="email" name="email" required /><br/>
					</div>
					<div class="text-right" style="margin-right:6px">
					<input type="submit" class="btn btn-warning" name="generate" value="Generate OTP"/>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>