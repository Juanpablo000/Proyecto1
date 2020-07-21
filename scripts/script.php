<?php 
	//echo $_POST['user']. "<br>";
	//echo $_POST['password']. "<br>";
	$nombre = $_POST['usuario'];
	$salt = "randomstringforsalt";
	$password = $_POST['password'];
	$md5 = md5($salt.$password);

	echo "Bienvenido $nombre <br> "; 
	echo "Contraseña original $password <br>"; 
	echo "Contraseña mod $md5";
?>