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
		<!--<h3> Student Details</h3>-->
			<table class="table table-striped table-hover table-bordered" border="2" style="border-color:black;margin:0;">
				<tr class="warning">
					<th>Guide</th>
					<th>Group Name</th>
					<th>USN</th>
					<th>Student Name</th>
					<th>Dept</th>
					<th>Branch</th>
					<th>Year</th>
					<th>Sem</th>
					<th>Contact</th>
					<th>Address</th>
					<th>Project Title</th>
					<th>Project Document</th>
				</tr>
				<?php
					$query = mysqli_query($con,'select * from std_details'); 
					$num = mysqli_num_rows($query);
					while($num){
						$data=mysqli_fetch_row($query);
						echo "<tr>
						<th>$data[0]</th>
						<th>$data[1]</th>
						<th>$data[2]</th>
						<th>$data[3]</th>
						<th>$data[4]</th>
						<th>$data[5]</th>
						<th>$data[6]</th>
						<th>$data[7]</th>
						<th>$data[8]</th>
						<th>$data[9]</th>
						<th>$data[10]</th>
						<th><a href='$data[11]'>Download</a></th>
						</tr>";
						$num--;
					}
				?>
			</table>
		</div>
	</body>
</html>
	<?php }else{
		echo "<script>window.open('login.php','_self')</script>";
	}