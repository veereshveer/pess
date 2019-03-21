<?php
	session_start();
	if(isset($_SESSION['adm_email'])){
	require('../includes/head.php');
	require('../db/db.php');
	
?>
</head>
<body style="background-image:url(../images/643482.jpg);background-attachment:fixed;background-position:center;background-size:cover;">
	<?php require_once('menu.php'); ?>
	<div class="container" style="width:100%;color:black;">
	<h3>Student Result</h3>
			<table class="table table-striped table-hover table-bordered table-responsive" border="1" style="border-color:black;">
		<tr class="warning">
			<th>Guide</th>
			<th>USN</th>
			<th>Student Name</th>
			<th>Dept</th>
			<th>Branch</th>
			<th>Year</th>
			<th>Semister</th>
			<th>Contact</th>
			<th>address</th>
			<th>Project Title</th>
			<th>Internal Marks</th>
			<th>External Marks</th>
			<th>Average Marks</th>
		</tr>
	<?php
	 $query = mysqli_query($con,'select * from std_details'); 
	 $num = mysqli_num_rows($query);
	 while($num){
	 $data=mysqli_fetch_row($query);
	 $avg=($data[12]+$data[13])/2;
	 $x=mysqli_query($con,"update std_details set average_marks='$avg' where usn='$data[2]'") or die("Not Working");
	 
	 echo "<tr>
				<th>$data[0]</th>
				<th>$data[2]</th>
				<th>$data[3]</th>
				<th>$data[4]</th>
				<th>$data[5]</th>
				<th>$data[6]</th>
				<th>$data[7]</th>
				<th>$data[8]</th>
				<th>$data[9]</th>
				<th>$data[10]</th>
				<th>$data[12]</th>
				<th>$data[13]</th>
				<th>$data[14]</th>
				
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