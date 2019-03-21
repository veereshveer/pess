<?php
    session_start();
	if(isset($_SESSION['int_email']))
	{
	require_once('../includes/head.php');
?>
	</head>
	<body style="background-color:gray;background-attachment:fixed;background-position:center;background-size:cover;">
		<?php require_once("../includes/header.php"); ?>
		<br/>
		<div style="width:100%;float:center;color:black" class="text-center">
			<h4>Welcome to Student and Thesis Enrollment Wizard.</h4>
			<p>This section will help you to perform 3 important activities to successfully submit student thesis for online evaluation.</p>
			<br/><br/>
			<div>
				<h3><b>Step 1</b></h3>
				<h4><font>Manage or create <b>student profile</b> and <b>upload thesis</b></font>
				<a class="btn btn-success" href="stdtl.php">Add Student <span class="glyphicon glyphicon-ok-circle"></span></a></h4>
				<h3><b>Step 2</b></h3>
				<h4><font>Organize <b>students group</b></font>
				<a class="btn btn-success" href="stdgrp.php">Create Group <span class="glyphicon glyphicon-ok-circle"></span></a></h4>
				<h3><b>Step 3</b></h3>
				<h4><font>Assign <b>student Marks</b></font>
				<a class="btn btn-success" href="evaluation.php">Evaluate <span class="glyphicon glyphicon-ok-circle"></span></a></h4>
			</div>
		</div>
	</body>
</html>
<?php
	}
	else
	{
		echo "<script>window.open('login.php','_self');</script>";
	}
?>