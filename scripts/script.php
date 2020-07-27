<?php 
	$usuario = $_POST['usuario'];
	$salt = "randomstringforsalt";
	$password = $_POST['password'];
	$md5 = md5($salt.$password);

	
	echo "Bienvenido $usuario <br> "; 
	echo "Contraseña original $password <br>"; 
	echo "Contraseña mod $md5";

	header("Location:../paginas/principal.html")
?>