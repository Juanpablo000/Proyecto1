let select_ciudad, select_departamentos, genero, formulario,formularioR,z, user;
let departamentos = ["Seleccione", "Antioquia", "Amazonas","Arauca", "Atlantico","Bolívar","Boyacá","Caldas","Caquetá","Casanare","Cauca","Cesar","Chocó",
"Córdoba","Cundinamarca","Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta","Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda",
"San Andrés", "Santander", "Sucre","Tolima","Valle del Cauca","Vaupés", "Vichada"];
const nombresID = ["nombre","apellidos","usuario","correo","password"];
const regulares = [/^[a-zA-ZÀ-ÿ\s]{2,20}$/, /^[a-zA-ZÀ-ÿ\s]{2,30}$/,/^[a-zA-Z0-9\_\-]{4,12}$/,
/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,/^[a-zA-Z0-9\_\-]{8,12}$/];
let arregloTextos = ["textNom","textApp","textUsr","textCorreo","texClr1"];	
let arregloMensajePos = ["Nombre valido", "Apellidos validos","Usuario valido", "Correo valido","Contraseña valida"];
let arregloMensaNeg = ["Nombre invalido", "Apellidos invalidos", "Usuario invalido", "Correo invalido","Contraseña invalida"];
let camposVal = [false,false,false,false,false,false,false];
              //nombre,apellidos,usuario, correo, clave, conf clave, departamento

let ciudades = [];
ciudades[0] = ["Medellín","Envigado","Sabaneta","Bello"];
ciudades[1] = ["Leticia", "Puerto Nariño"];
ciudades[2] = ["Arauca","Arauquita","Saravena"];
ciudades[3] = ["Barranquilla","Malambo","Baranoa", "Campo de la Cruz", "Suan"]
ciudades[4] = ["Cartagena","Arjona","Arenal","Morales","San Pablo"];
ciudades[5] = ["Motavita","Sora","Tunja","Ventaquemada","Turmequé","Buenavista","Tenza"];
ciudades[6] = ["Manizales","La Dorada","Riosucio","Villamaría"];
ciudades[7] = ["Florencia","Cartagena del Chairá","Puerto Rico","Solano"];
ciudades[8] = ["Yopal","Aguazul","Villanueva", "Monterrey"];
ciudades[9] = ["Popayán","El Tambo","La Vega","Bolívar","Cajibío"];
ciudades[10] = ["Valledupar","Aguachica","Bosconia","La Paz","Pailitas"];
ciudades[11] = ["Quibdó","Alto Baudó","Riosucio"];
ciudades[12] = ["Montería","Tierralta","Sahagún","Ayapel","Moñitos"];
ciudades[13] = ["Bituima","Chipaque","Ubaque","Cota"];
ciudades[14] = ["Inírida", "Barrancominas", "Cacahual","San Felipe"];
ciudades[15] = ["S. Jose del Guaviare","Miraflores","El Retorno","Calamar"];
ciudades[16] = ["Neiva","Pitalito","La Plata"];
ciudades[17] = ["Riohacha","Uribia","Maicao","Manaure","Barrancas"];
ciudades[18] = ["Santa Marta","Algarrobo","Concordia"];
ciudades[19] = ["Villavicencio","Acacías","Granada","Puerto López"];
ciudades[20] = ["Pasto","Tumaco","Ipiales","Barbacoas"];
ciudades[21] = ["Cúcuta","Ocaña","Los Patios","Pamplona"];
ciudades[22] = ["Mocoa","Puerto Asís","Villagarzón","Santiago"];
ciudades[23] = ["Armenia","Calarcá","Montenegro","Córdoba"]
ciudades[24] = ["Pereira","Dosquebradas","La Virginia","La Celia"];
ciudades[25] = ["San Andrés","Providencia","Santa Catalina"];
ciudades[26] = ["Bucaramanga","Floridablanca","Piedecuesta","Bolívar"];
ciudades[27] = ["Sincelejo","Corozal","San Onofre","Majagual","Sucre"];
ciudades[28] = ["Ibagué","Espinal","Chaparral","Líbano"];
ciudades[29] = ["Cali","Buga","Palmira","Cartago"];
ciudades[30] = ["Mitú","Carurú","Taraira","Papunaua"];
ciudades[31] = ["Cumaribo","Puerto Carreño","La Primavera","Santa Rosalía"];

window.onload = ()=>{

	select_departamentos = document.getElementById("select-departamentos");
	select_ciudad = document.getElementById("select-ciudad");
	formulario = document.getElementById("Flogin");
	formularioR = document.getElementById("registro");
	z = document.getElementById("elegir");
	user = document.getElementById("userA");
	
	if(document.getElementById("contacto")!=null){
		CambiarTexto();
	}

	if(formulario!=null){
		LlenarDepartamentos();
	}
	
};

function procesarDatos(){
	fetch('scripts/script.php', {
	method: 'post',
	body:new FormData(formularioR)
	}).then(function(response) {
		return response.json(); 
	}).then(function(json) {
		guardarDatos(json);
	}).catch(function(err) {
		console.log("error en registro");
	});
}
 
function procesarDatosLogin(){

let persona = localStorage.getItem("lista");

	if (persona!=null){
		fetch('scripts/script.php', {
		method: 'post',
		body:new FormData(formulario)
		}).then(function(response) {
			return response.json(); 
		}).then(function(json) {
			validarLogin(json);
		}).catch(function(err) {
			console.log("error en el login");
		});
	}
	
    
}

function guardarDatos(json){
	let Listausuario = JSON.parse(localStorage.getItem("lista"));
	
	var contrl = true;
	if(Listausuario!=null){
		//validar usario unico
	var tm = Listausuario.length;
		for(var i=0; i<tm;i++){
	        if(json.Listausuario === Listausuario[i].usuario){
	            alert('El usuario ' + Listausuario[i].usuario +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
        //validar correo unico
	    for(var i=0; i<tm;i++){
	        if(json.correo === Listausuario[i].correo){
	            alert('El correo ' + Listausuario[i].correo +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
	if (contrl!=false){
	        Listausuario.push(json); 
	        localStorage.setItem("lista",JSON.stringify(Listausuario));
	        alert('Su cuenta ha sido creada');
		}
	}else{
		  if(!(Listausuario instanceof Array)){
	        Listausuario = []; 
	        Listausuario.push(json); 
	        localStorage.setItem("lista",JSON.stringify(Listausuario));
	        alert('Su cuenta ha sido creada');
	    }
	}
	window.location.href = './';
}

function validarLogin(json){
  let usuario = JSON.parse(localStorage.getItem("lista"));
  var variable =1;
  if(usuario!=null){
  	var tm = usuario.length;
  	for(var i=0; i<tm;i++){
  		if (usuario[i].password === json.password && usuario[i].usuario === json.usuario){
  		 	variable = -1;
		 	break;
		 } 
  	}
  	
  		if(variable==1){
	        alert('Error en el login');
	        window.location.href = './';
		}else if(variable== -1){
	        alert('Has iniciado sesion ' + json.usuario);
	        window.location.href = './paginas/principal.html';
	 
  		}

	}else{
	     alert('No se ha registrado');
		 window.location.href = './';
	    }
}
	

function login(){
	formulario.style.left = "50px";
	formularioR.style.left = "450px";
	z.style.left = "0px";
}

function registrar(){
	formulario.style.left = "-400px";
	formularioR.style.left = "50px";
	z.style.left = "120px";
}

function LlenarDepartamentos(){
    for(var i=0; i<departamentos.length;i++){
        var option = document.createElement("option"); 
        option.innerHTML = departamentos[i]; 
        select_departamentos.appendChild(option); 
    }
}

function LlenarCiudades(){
	let aregloOpciones, salida;
	select_ciudad.innerHTML = "";
	salida = (select_departamentos.selectedIndex)-1;

	if(salida>-1){
		ArregloOpciones=ciudades[salida];
		var tm = ArregloOpciones.length;
		for(var i=0; i<tm;i++){
        	var option = document.createElement("option"); 
        	option.innerHTML = ArregloOpciones[i]; 
        	select_ciudad.appendChild(option); 
    	}
	}
}
function validationF(inputName){
  var varInput =  document.getElementById(inputName).value;
  var tam = formularioR.length;
  
  for(var i=0; i<tam; i++){
	    if(inputName.localeCompare(nombresID[i]) == 0){
	  	  var text = document.getElementById(arregloTextos[i]);
		  var pattern = regulares[i];
		  if(varInput.match(pattern)){
		  	text.innerHTML = arregloMensajePos[i];
			text.style.color = "#00C851";
		    camposVal[i] = true;

		  }else{
		    text.innerHTML = arregloMensaNeg[i];
		    text.style.color = "#ff0000";
		    camposVal[i] = false;
		  }

		  if(varInput==""){
		  	camposVal[i] = false;
		    text.innerHTML="";
		    text.style.color = "#00ff00";
		  }
	    }
    }
}


function validarClaves(){
  let password = document.f1.password.value;
  let password2 = document.f1.password2.value;

  var text = document.getElementById("texClr2");
  var pattern = /^[a-zA-Z0-9\_\-]{8,12}$/;
	  if(password2.match(pattern) && password.localeCompare(password2) == 0){
		     text.innerHTML="Las contraseñas coinciden";
		     text.style.color = "#00C851";
		     camposVal[5]=true;
	  }else{
		    text.innerHTML="Las contraseñas no coinciden";
		    text.style.color = "#ff0000";
		    camposVal[5]=false;
	  }
	  if(password2==""){
	  	camposVal[5]=false;
	    text.innerHTML="";
	    text.style.color = "#00ff00";
	  }	
}

function validarSelect(){
	let indice = select_departamentos.selectedIndex;
	if( indice == null || indice == "" ) {
		alert('Seleccione un departamento');
        camposVal[6]=false;
	}else{
		camposVal[6]=true;
	}
}

function val(){
	validarSelect();
	var i=-1;
	var t = camposVal.length;
	for(i=0; i<t;i++){
		if(camposVal[i]==false){
			break;
		}
	}
	if(i==7){
		procesarDatos();
		return true;
	}else{
		alert("Campos incorrectos");
		return false;
	}
}

function CambiarTexto(){
	let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
	if(ListaUsuarios!=null){
		var tm = ListaUsuarios.length;
		var nom = ListaUsuarios[tm-1].nombre;
		var ap = ListaUsuarios[tm-1].apellidos;
		var email = ListaUsuarios[tm-1].correo;
	    document.getElementById("NomContacto").placeholder = "Nombre: "+ nom + " " +ap ;
	    document.getElementById("CorrContacto").placeholder = "Correo: "+ email;
	}
}

const nombresIDF = ["asunto","mensaje"];
const regularesF = [/^[a-zA-ZÀ-ÿ\s ]{5,18}$/,/^[a-zA-Z0-9\_\-\.\, ]{10,50}$/];
let camposValF = [false,false];  

function valF(){
  for(var i=0; i<2; i++){
  		 var varInput = document.getElementById(nombresIDF[i]).value;
		  var pattern = regularesF[i];
		  if(varInput.match(pattern)){
		    camposValF[i] = true;

		  }else{
		    camposValF[i] = false;
		  }

		  if(varInput==""){
		  	camposValF[i] = false;
		  }
  }
    for(i=0; i<2;i++){
		if(camposValF[i]==false){
			break;
		}
	}
	if(i==2){
		alert("¡Mensaje envidao!");

		return true;
	}else{
		alert("Campos incorrectos");
		return false;
	}
}

const nombresIDL = ["userA","claveA"];
const regularesL = [/^[A-Za-z0-9!?-]{5,12}$/,/^[a-zA-Z0-9\_\-]{8,12}$/];
let camposValL = [false,false];  

function valLogin(){
	 for(var i=0; i<2; i++){
  		 var varInput = document.getElementById(nombresIDL[i]).value;
		  var pattern = regularesL[i];
		  if(varInput.match(pattern)){
		    camposValL[i] = true;

		  }else{
		    camposValL[i] = false;
		  }

		  if(varInput==""){
		  	camposValL[i] = false;
		  }
  }
    for(i=0; i<2;i++){
		if(camposValL[i]==false){
			break;
		}
	}
	if(i==2){
		procesarDatosLogin();
		return true;
	}else{
		alert("Campos incorrectos en el Login");
		return false;
	}
}