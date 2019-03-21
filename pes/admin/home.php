<?php
	session_start();
	if(isset($_SESSION['adm_email'])){
	require('../includes/head.php');
	require('../db/db.php');
?>
	</head>
	<body style="width:100%;background-color:gray">
		<div class="container">
			<?php require_once('menu.php'); ?>
				  <h3>Welcome to Admin</h3> 
			   </div>
			</div>
		</div>
    </body>
	</html>
	<?php }else{
	echo "<script>window.open('login.php','_self')</script>";
}