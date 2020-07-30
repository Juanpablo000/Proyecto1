<?php 
	$usuario = $_POST['userA'];
	$salt = "randomstringforsalt";
	$password = $_POST['claveA'];
	$md5 = md5($salt.$password);

	header("Location:../paginas/principal.html");
?>
