<?php 
$usuarioRegistro = $_POST['usuario'];
$salt = "randomstringforsalt";
$password = $_POST['password'];
$md5 = md5($salt.$password);
$genero = $_POST['genero'];
$nombre = $_POST['nombre'];
$apellidos =  $_POST['apellidos'];
$departamento = $_POST['select-departamentos'];
$ciudad = $_POST['select-ciudad'];
$correo =  $_POST['correo'];
?>


<script type="text/javascript">
var usuarioR = '<?php echo $usuarioRegistro;?>';
var generoR = '<?php echo $genero;?>';
var nombreR = '<?php echo $nombre;?>';
var apellidoR = '<?php echo $apellidos;?>';
var departamentoR= '<?php echo $departamento;?>';
var ciudadR = '<?php echo $ciudad;?>';
var correoR = '<?php echo $correo;?>';
var datosMd5 = '<?php echo $md5;?>';
var contrl = true;

		let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
		if(ListaUsuarios!=null){
		//validar usario unico
		var tm = ListaUsuarios.length;
		for(var i=0; i<tm;i++){
	        if(usuarioR == ListaUsuarios[i].usuario){
	            alert('El usuario ' + usuarioR +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
        //validar correo unico
	    for(var i=0; i<tm;i++){
	        if(correoR == ListaUsuarios[i].correo){
	            alert('El correo ' + correoR +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
		}


	if (contrl!=false){
    	let persona = {
			nombre: nombreR,
			apellidos: apellidoR,
			usuario: usuarioR,
			departamento: departamentoR,
			ciudad: ciudadR,
			genero: generoR,
            correo: correoR,
            clave: datosMd5,
        };

        
	    if(!(ListaUsuarios instanceof Array)){
	        ListaUsuarios = []; 
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }else{
	        ListaUsuarios.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(ListaUsuarios));
	    }
	    alert('Su cuenta ha sido creada');
    }	
 window.location.href = '../';
    	
 
</script>