<?php 
	//echo $_POST['user']. "<br>";
	//echo $_POST['password']. "<br>";
	$salt = "randomstringforsalt";
	$password = $_POST['password'];

	$md5 = md5($salt.$password);
?>