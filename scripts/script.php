<?php 

 		$salt = "randomstringforsalt";
	    $lista = array();
	    if(isset($_POST["usuario"]) && isset($_POST["genero"]) && isset($_POST["nombre"]) && isset($_POST["apellidos"])&&isset($_POST["select-departamentos"]) 
	    	&& isset($_POST["select-ciudad"])  && isset($_POST["correo"]) && isset($_POST["password"]) ){

		    $lista["usuario"] = $_POST["usuario"];
			$lista["genero"] = $_POST["genero"];
			$lista["nombre"] = $_POST["nombre"];
			$lista["apellidos"] =  $_POST["apellidos"];
			$lista["departamento"] = $_POST["select-departamentos"];
			$lista["ciudad"] = $_POST["select-ciudad"];
			$lista["correo"] =  $_POST["correo"];		
	  		$lista["password"] = md5($salt.$_POST["password"]);
	    }else{
	    	 $lista["usuario"] = $_POST["userA"];
	    	 $lista["password"] = md5($salt.$_POST["claveA"]);
	    }   
		echo json_encode($lista);
?>