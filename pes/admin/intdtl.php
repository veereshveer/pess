<?php
	session_start();
	if(isset($_SESSION['adm_email'])){
	require('../includes/head.php');
	require('../db/db.php');
?>
	</head>
	<body style="background-image:url(../images/643482.jpg);background-attachment:fixed;background-position:center;background-size:cover;">
		<?php require_once('menu.php'); ?>
		<div class="container-fluid" style="width:100%;color:black;">
		<!--<h3>Internal details</h3>-->
			<table class="table table-striped table-hover table-bordered" border="1" style="border-color:black;">
				<tr class="warning"><!--<th>check</th>-->
					<th>Name</th>
					<th>Dept</th>
					<th>Branch</th>
					<th>Email</th>
				</tr>
			<?php
			 $query = mysqli_query($con,'select * from int_details'); 
			 $num = mysqli_num_rows($query);
			while($num){
			$data=mysqli_fetch_row($query);
			echo "<tr>
					   <!--<th><input type='checkbox' name='ckeck'/></th>-->
						<th>$data[0]</th>
						<th>$data[1]</th>
						<th>$data[2]</th>
						<th>$data[3]</th>
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
		$query="select email from int_details";
		$exec=mysqli_query($con,$query) or die("Error");
		while($val=mysqli_fetch_row($exec)){
			$to = $val[0];
			$subject = 'SIGNUP LINK';
			$messege = "http://anilbk1771996.000webhostapp.com/pes/internal/login.php";
			$headers = 'From: DrAIT_Autonomous';
		    $chk = mail($to,$subject,$messege,$headers) or die("Error");
		    if($chk){
		        echo "<script>alert('Link Sent!');</script>";
		    }else{
		        echo "<script>alert('Link not Sent!');</script>";
		    }
		}
	}
 }else{
	echo "<script>window.open('login.php','_self')</script>";
}