<?php
session_start();
require('../includes/head.php');
require('../db/db.php');
if(isset($_SESSION['ext_email']))
{
if(isset($_POST['upload'])){
	$query = "update std_details set external_marks='$_POST[marks]' where usn='$_POST[usn]'";
	$chk=mysqli_query($con,$query) or die("Error");
	if($chk){
		echo "<script>alert('Marks Uploaded!')</script>";
	}else{
		echo "<script>alert('Problem with the server')</script>";
	}
}
?>
</head>
<body style="background-image:url(../images/643482.jpg);background-attachment:fixed;background-position:center;background-size:cover;">
	<?php require_once("../includes/header.php"); ?>
	<br/>
	<div style="width:50%;float:center;color:black;margin-left:25%" class="text-center">
	<h3>Project Details</h3>
	<table style="margin:10px;border-color:orange;" border="2" width="600px" height="40" style="border-color:white;">
			<tr>
			    <th>Guide</th>
			    <th>Group Name</th>
				<th>USN</th>
				<th>Student Name</th>
				<th>Project Title</th>
				<th>Project Document</th>
				<th>Enter the Marks</th>
				<th></th>
				<?php
				
				$q0="select * from ext_details where email='$_SESSION[ext_email]'";
				$query0 = mysqli_query($con,$q0) or die("Not working"); 
				$rows=mysqli_num_rows($query0);
				$num0 = mysqli_fetch_row($query0);
				
				
				
				$qu="select * from ext_details where email='$_SESSION[ext_email]'";
				$query3 = mysqli_query($con,$qu) or die("Not working1"); 
				$data1 = mysqli_fetch_row($query3);
				
				$q="select * from std_details where group_name = '$data1[4]' and course='$num0[2]'";
				$query = mysqli_query($con,$q) or die("Not working2"); 
				$num = mysqli_num_rows($query);
				while($num){
				$data=mysqli_fetch_row($query);
				$query1="select external_marks from std_details where usn='$data[2]'";
				$val=mysqli_query($con,$query1) or die("not working!");
				$value=mysqli_fetch_array($val);
				echo "<tr>
							<th>$data[0]</th>
							<th>$data[1]</th>
							<th>$data[2]</th>
							<th>$data[3]</th>
							<th>$data[10]</th>
							<th><a href='$data[11]'>Download</a></th>
							<form method='post'>
								<th><input id='$data[2]' maxlength='3' pattern='[0-9].{0,100}' style='width:100px;margin:5px;' value='$value[0]' name='marks' placeholder='Marks' required/></th>
									<input type='hidden' name='usn' value='$data[2]'/>
								<th><input name='upload' type='submit' value='upload'/></th>
							</form>
				</tr>";
				$num--;
				}
}else{
	echo "<script>window.open('login.php','_self');</script>";
}
		?>
	</table>
	</div>
	</body>
	</html>