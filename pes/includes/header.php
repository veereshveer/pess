<?php
require('../db/db.php');
?>
<div style="background-color:rgba(50,20,1,0.5);width:100%;height:100px;">
	<div style="width:50%;float:left;margin-top:15px;">
		<a href="../internal/home.php"><img src="" alt="IMagE" /></a>
	</div>
	<div style="width:50%;float:right;margin-top:15px;color:black">
		<div style="height:50%;width:100%;">
		<?php if(isset($_SESSION['int_user'])){ ?>
		<font style="font-size:20px;"><div style="float:right;margin-right:8px;"><?php echo 'Welcome : '.$_SESSION['int_user']; ?>|<a href="../includes/changepass.php?int">Change Password</a>|<a href="../includes/int_logoff.php">Log Off</a></div></font>
		<?php } ?>
		</div>
		<div style="height:50%;width:100%;">
			<font style="font-size:20px;float:right;"><b style="color:green;margin-right:8px;">Need help? Call:+918867797481</b></font>
		</div>
	</div>
</div>