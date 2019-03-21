<?php
	session_start();
	if(isset($_SESSION['adm_email'])){
	require('../includes/head.php');
	require('../db/db.php');
?>
	</head>
	<body style="background-color:white;background-attachment:fixed;background-position:center;background-size:cover;">
		<?php require_once('menu.php'); ?>
		<div class="container text-center " style="margin-top:115px;width:530px;background-color:white;padding:30px;">
			<h3 style="padding:10px" class="btn-danger">ADD INTERNAL</h3>
			<form method="post">
				<div>
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
						<input class="form-control" title="Name Must Contain Minimum 4 Charectors" placeholder="Name" type="Text" name="uname" pattern=".{4,10}" required /><br/>		
					</div>
					<div class="input-group" style="padding:7px">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
					<select class="form-control" name="dept" id="dept" placeholder="department" class="form-control"  required>
						<option value="">Select Department</option>
						<option id="mca" value="MCA">MCA</option>
						<option id="engineering" value="Engineering">Engineering</option>
						<option id="mba" value="MBA">MBA</option>
					</select>
					</div>
					
					<div class="input-group" style="padding:7px">
						<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
						<select class="form-control" name="course" id="course" placeholder="course" class="form-control"  required>
						<option value="">Select Course</option>
						<script type="text/javascript">
							$(document).ready(function(){
								$('#dept').change(function(){
									var dep = $('option:selected',$(this)).text();
									if(dep == 'MCA'){
										$('#course').empty();
										$('#course').append('<option value="">Select Course</option>');
										$('#course').append('<option value="MCA">MCA</option>');
									}else if(dep == 'Engineering'){
										$('#course').empty();
										$('#course').append('<option value="">Select Course</option>');
										$('#course').append('<option value="CS">Computer Science</option>');
										$('#course').append('<option value="EC">Electronics</option>');
										$('#course').append('<option value="Civil">Civil</option>');
										$('#course').append('<option value="Mech">mechanical</option>');
										$('#course').append('<option value="IT">Information Technology</option>');
									}else if(dep == 'MBA'){
										$('#course').empty();
										$('#course').append('<option value="">Select Course</option>');
										$('#course').append('<option value="MBA">MBA</option>');
									}
								});
							});
						</script>
					</select>
					</div>
					
					<div class="input-group" style="padding:7px;">
						<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
						<input class="form-control" placeholder="Email" type="email" name="email" required /><br/>
					</div>
					<div class="text-right" style="margin-right:6px">
					<input type="submit" class="btn btn-warning" name="add" value="ADD"/>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>
<?php
	if(isset($_POST['add'])){
		$query="insert into int_details values('$_POST[uname]','$_POST[dept]','$_POST[course]','$_POST[email]')";
		$exec = mysqli_query($con,$query) or die("Error");
		if($exec){
			echo "<script>alert('Data Inserted')</script>";
		}else{
			echo "<script>alert('Error with the Query!')</script>";
		}
	}
?>
<?php }else{
	echo "<script>window.open('login.php','_self')</script>";
}