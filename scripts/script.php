<?php 
	  //datos obtenidos en el login
	  $usuarioLogin = $_POST['userA'];
	  $salt = "randomstringforsalt";
	  $passwordLogin = $_POST['claveA'];
	  $md5L = md5($salt.$passwordLogin);
?>

<script type="text/javascript">

	let userL = '<?php echo $usuarioLogin;?>';
    let Md5L = '<?php echo $md5L;?>';
    let variable = 1;

		let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
		if(ListaUsuarios!=null){
			var tm = ListaUsuarios.length;
			for(var i=0; i<tm;i++){

				var string1 = ListaUsuarios[i].usuario;
				var result = string1.localeCompare(userL);

				var string2 = ListaUsuarios[i].clave;
				var result2 = string2.localeCompare(Md5L);

				if(result == 0 && result2 == 0){
					console.log(ListaUsuarios[i]);
		        	variable = -1;
		            break;
				}
		    }

		    if(variable==1){
	            alert('Error en el login');
	            window.location.href = '../';
	        }else if(variable== -1){
	        	alert('Has iniciado sesion');
	        	window.location.href = '../paginas/principal.html';
	        }
	    }else{
	     alert('No se ha registrado');
		 window.location.href = '../';
	    }
</script>