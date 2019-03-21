	<?php
		@session_start();
		error_reporting();
		require('../includes/head.php');
	?>
	</head>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<?php require_once("../includes/header.php"); ?>
		<form method="post" enctype="multipart/form-data">
			<div class="container" style="width:100%;">
				<div style="width:50%;float:left;margin-right:5%;margin-left:5%;">
					<label for="Guide">Guide</label>
					<input placeholder="Guide" name="guide" class="form-control" style="margin:20px;width:200px;" required>
				</div>
				<div style="width:40%;float:left;margin-right:5%;margin-left:5%;">
					
					<h3><b>Course Details</b></h3>
					
					<label for="">Branch/Department</label>
					<select name="dept" id="dept" placeholder="department" class="form-control"  required>
						<option value="">Select Department</option>
						<option id="mca" value="MCA">MCA</option>
						<option id="engineering" value="Engineering">Engineering</option>
						<option id="mba" value="MBA">MBA</option>
					</select>
					<br/>
					<label for="">course</label>
					<select name="course" id="course" placeholder="course" class="form-control"  required>
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
					<br/>
					<label for="year">year</label>
					<input name="year" id="year" title="Give Correct Year!" type="text" maxlength="4" min="2015" max="" placeholder="Year" class="form-control" required />
					<br/>
					<label for="Guide">Course Period</label>
					<select id="sem" name="course_period" class="form-control" required > 
						<option value=''>Select Period</option>
						<script type="text/javascript">
							$(document).ready(function(){
								$('#dept').change(function(){
									var dep = $('option:selected',$(this)).text();
									if(dep == 'MCA'){
										$('#sem').empty();
										$('#sem').append('<option value="">Select Course</option>');
										$('#sem').append('<option value="1">1</option>');
										$('#sem').append('<option value="2">2</option>');
										$('#sem').append('<option value="3">3</option>');
										$('#sem').append('<option value="4">4</option>');
										$('#sem').append('<option value="5">5</option>');
										$('#sem').append('<option value="6">6</option>');
									}else if(dep == 'Engineering'){
										$('#sem').empty();
										$('#sem').append('<option value="">Select Course</option>');
										$('#sem').append('<option value="1">1</option>');
										$('#sem').append('<option value="2">2</option>');
										$('#sem').append('<option value="3">3</option>');
										$('#sem').append('<option value="4">4</option>');
										$('#sem').append('<option value="5">5</option>');
										$('#sem').append('<option value="6">6</option>');
										$('#sem').append('<option value="7">7</option>');
										$('#sem').append('<option value="8">8</option>');
									}else if(dep == 'MBA'){
										$('#sem').empty();
										$('#sem').append('<option value="">Select Course</option>');
										$('#sem').append('<option value="1">1</option>');
										$('#sem').append('<option value="2">2</option>');
										$('#sem').append('<option value="3">3</option>');
										$('#sem').append('<option value="4">4</option>');
										$('#sem').append('<option value="5">5</option>');
										$('#sem').append('<option value="6">6</option>');
										$('#sem').append('<option value="7">7</option>');
										$('#sem').append('<option value="8">8</option>');
									}
								});
							});
						</script>
					</select>
				</div>
				<div style="width:40%;float:right;margin-right:5%;margin-left:5%;">
					<h3><b>Student Details</b></h3>
					<label for="">Student Name</label>
					<input name="name" id="name"  type="text" placeholder="Student Name" class="form-control"  />
					<br/>
					<label name="usn" for="">USN</label>
					<input name="usn" id="usn"  type="text" placeholder="USN" pattern=".{5,15}" class="form-control"  />
					<br/>
					<label for="year">Contact No</label>
					<input name="contact" id="contact" value="+91" type="text" placeholder="Contact No" class="form-control" pattern=".{13,13}" required />
					<br/>
					<label for="year">Postal Address</label>
					<textarea name="address" id="pa" rows="4" col="10" placeholder="Postal Address" class="form-control" pattern=".{6,50}" required ></textarea>
				</div>
			</div>
			<br/>
			<br/>
			<div style="width:50%;float:center;margin-left:6%">
				<h3><b>Project Details</b></h3>
				<label for="">Project Title</label>
				<input name="project_title" id="pt"  type="text" placeholder="Title" class="form-control"  />
				</br>
				<input class="form-control" type="file" name="project_doc" id="report">
			</div>
			</br>
			<div style="width:100%" class="text-center">
				<input name="submit" style="color:black;width:100px;padding:10px;background-color:rgba(254,100,200,0.3);" type="submit" value="Submit"/>
				</br>
				</br>
			</div>
		</form>
	</body>
</html>
<?php
if(isset($_POST['submit'])){
	require_once('../db/db.php');
	$file_name=$_FILES['project_doc']['name'];
	$file_name_temp=$_FILES['project_doc']['tmp_name'];
	$td="../project_doc/";
	$path1=$td.$file_name;
	move_uploaded_file($file_name_temp,"$path1");
	$exec = mysqli_query($con,"insert into std_details values('$_POST[guide]','','$_POST[usn]','$_POST[name]','$_POST[dept]','$_POST[course]','$_POST[year]','$_POST[course_period]','$_POST[contact]','$_POST[address]','$_POST[project_title]','$path1','','','')") OR DIE("SHOWING ERROR");
	echo "<script>window.open('home.php','_self')</script>";
}
?>