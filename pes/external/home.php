<?php
 session_start();
 if(isset($_SESSION['ext_email'])){
	require('../includes/head.php');
?>
	<script type="text/javascript">
		$(document).ready(function(){
			$('#chk').click(function(){
				$('#n').attr("disabled",!this.checked);
			});
		});
	</script>

</head>
<body style="background-image:url(../images/643482.jpg);background-attachment:fixed;background-position:center;background-size:cover;">
	<?php require_once("../includes/ext_header.php"); ?>
	<br/>
	<div style="width:100%;float:center;color:black" >
	       <pre>
	       <p><b class="text-center"> STRICTLY CONFIDENTIAL </b>
	        <h4>
         	To
      	<?php
              echo	"<allow the name of the department and college adress >"
         ?></h4>
            Sir/Madam
     
	      sub:<b> Evaluation of MCA Dissertation Report-reg</b>
	      </p>
	      <p>                 BY the order of the Honorable vise-chanceller, you have
          been appointed as an examiner for evaluation of the MCA dissertation reports. 
	      I request you to kindly evaluate the dissertation report listed below and send
	      the marks list separatly  to the address mentioned below withinn 15 days form 
	      the date of recipt of this latter.</p> 
	   	 </pre>
	  <div  style="margin-left:20% ;color:blue">
	     	<p><input id="chk" type="checkbox" name="chk"/>" I Seen Above Content"</p>
			<br/><br/><br/>
			<?php 
			echo  "<if go next only when the check box is true>"
			?>
			<button id="n" class="btn btn-success" onclick="opn();" disabled>NEXT <span class="glyphicon glyphicon-ok-squar"></span></a></h4></button>
			<script>
				function opn(){
					window.open("evaluation.php","_self");
				}
			</script>
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