<?php
    session_start();
	require('../includes/head.php');
	require_once('../db/db.php');
	if(isset($_POST['submit'])){
		$_SESSION['grp']=$_POST['grp'];
	}
?>
</head>
<body style="">
	<?php require_once("../includes/header.php"); ?>
	<br/>
	<div style="width:100%;hight:100%;float:center;color:black" class="text-center">
		<form action="" method="post" class="form-inline">
		<div>
		    <h4> <b>Organization student group</b></h4><br/><br/>
		    <div style="width:40%;height:100%;float:left;margin-right:5%;margin-left:5%;">
				<h4><b> Step 2 </b></h4>
		        <h5> <b>Ungrouped Student List<b></h5>
		        <table class="table table-striped table-hover table-bordered" border="" width="500px" height="40" style="border-color:black;border-size:4">
			<tr>
			     <!--<th>check</th>-->
			     <th>Guide</th>
				 <th>USN</th>
				 <th>Student Name</th>
				<th>Project Title</th>
				<th>Add to Group</th>
				</tr>
				<?php
		             $query = mysqli_query($con,'select * from std_details where group_name="" order by guide,name'); 
		             $num = mysqli_num_rows($query);
		             while($num){
		             $data=mysqli_fetch_row($query);
		             echo "<tr>
					        <!--<th><input type='checkbox' name='ckeck'/></th>-->
					        <th>$data[0]</th>
					        <th>$data[2]</th>
					        <th>$data[3]</th>
					        <th>$data[10]</th>
							<th><a style='color:blue' href='../functions/function.php?addgrp=$data[2]'>ADD</a></th>
					</tr>";
		            $num--;
					}
		        ?>
		    </table>
		    </div><br/><br/>
		    <div style="width:40%;hight:100%;float:right;margin-right:5%;margin-left:5%;">
		        <div class="form-group" style="float:left">
					<label for="Student goup"><b>Create Student Group<b></label>
					<form action="" method="post">
						<input name="grp" type='text' placeholder='Group Name' />
						 <br/><br/>
		           	    <input type="submit" name="submit" value="submit"/>
					</form>
						<br/><br/>
				    <table class="table table-striped table-hover table-bordered" border="1" width="500px" height="40" style="border-color:black;">
			             <tr>
			                 <th>Group</th>
			                 <th>Guide</th>
				             <th>USN</th>
			            	 <th>Student Name</th>
				             <th>Project Title</th>
				             <th>Remove from Group</th>
				          </tr>
						  </tr>
				<?php
		             $query = mysqli_query($con,'select * from std_details where group_name != "" order by group_name'); 
		             $num = mysqli_num_rows($query);
		             while($num){
		             $data=mysqli_fetch_row($query);
		             echo "<tr>
					        <!--<th><input type='checkbox' name='ckeck'/></th>-->
					        <th>$data[1]</th>
					        <th>$data[0]</th>
					        <th>$data[2]</th>
					        <th>$data[3]</th>
					        <th>$data[10]</th>
							<th><a style='color:blue' href='../functions/function.php?rmgrp=$data[2]'>Remove</a></th>
					</tr>";
		            $num--;
					}
		        ?>
				    </table>
      </div>
	 </div>
    </div>