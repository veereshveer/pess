<?php
	session_start();
	if(isset($_SESSION['adm_email'])){
	require('../includes/head.php');
	require('../db/db.php');
	
	
	if(isset($_POST['upload'])){
		$q="select * from ext_details where group_assigned = '$_POST[group]' and dept='$_POST[dept]' and email != '$_POST[email]'";
		$query = mysqli_query($con,$q) or die("Not working"); 
		$rows=mysqli_num_rows($query);
		$x=mysqli_fetch_row($query);
		if($rows > 0){
			echo "<script>alert('already assigned to Another to $x[0]');</script>";
		}else{
			$query = "update ext_details set group_assigned='$_POST[group]' where email='$_POST[email]'";
			$chk=mysqli_query($con,$query) or die("Error");
			if($chk){
				echo "<script>alert('Group Assigned!')</script>";
			}else{
				echo "<script>alert('Already Assigned')</script>";
			}
		}
			
	}		
?>
	</head>
	<body style="background-image:url(../images/643482.jpg);background-attachment:fixed;background-position:center;background-size:cover;">
		<?php require_once('menu.php'); ?>
		<div class="container-fluid" style="width:100%;color:black;">
		<!--<h3>External Details</h3>-->
		<table class="table table-striped table-hover table-bordered" border="1" width="600px" height="40" style="border-color:black;">
			<tr class="warning">
				<!--<th>check</th>-->
				<th>Name</th>
				<th>College Name</th>
				<th>Dept</th>
				<th>Email</th>
				<th>Student Group</th>
				<th>Submit</th>
			</tr>
			<?php
		$query = mysqli_query($con,'select * from ext_details'); 
		$num = mysqli_num_rows($query);
		while($num){
		$data=mysqli_fetch_row($query);
		echo "<tr>
					<!--<th><input type='checkbox' name='ckeck'/></th>-->
					<th>$data[0]</th>
					<th>$data[1]</th>
					<th>$data[2]</th>
					<th>$data[3]</th>
					<form method='post'>
					<th>
						<select name='group' value='num0[4]' required>
							<option value=''>Select Group</option>
							<option value='A'>A</option>
							<option value='B'>B</option>
							<option value='C'>C</option>
							<option value='D'>D</option>
							<option value='E'>E</option>
						</select>
					</th>
						<input name='dept' type='hidden' value='$data[2]'/>
						<input name='email' type='hidden' value='$data[3]'/>
						<th><input name='upload' type='submit' value='upload'/></th>
					</form>
				
		</tr>";
		$num--;
		}
		?>
			</table>
			<form method="post">
				<input class="btn btn-info" type="submit" value="Send Link" name="submit"/>
			</form>
		</div>
		</body>
		</html>
<?php
	if(isset($_POST['submit'])){
		$query="select email from ext_details";
		$exec=mysqli_query($con,$query) or die("Error");
		while($val=mysqli_fetch_row($exec)){
			echo "<script>alert('$val[0]');</script>";
			$to=$val['0'];
			$subject = 'SIGNUP LIN';
			$messege = "http://anilbk1771996.000webhostapp.com/pes/external/login.php";
			$headers = 'From: DrAIT_Autonomous';
			@mail($to,$subject,$messege,$headers);
		}
	}
?>



<?php }else{
	echo "<script>window.open('login.php','_self')</script>";
}