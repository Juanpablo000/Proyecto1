let select_ciudad, select_departamentos, genero, x,y,z,nomtxt,apelltxt,correotxt,clavetxt, usuariotxt, userName, userPw;
var oldInfo;
let contrl;
let departamentos = ["Seleccione", "Antioquia", "Amazonas","Arauca", "Atlantico","Bolívar","Boyacá","Caldas","Caquetá","Casanare","Cauca","Cesar","Chocó",
"Córdoba","Cundinamarca","Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta","Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda",
"San Andrés", "Santander", "Sucre","Tolima","Valle del Cauca","Vaupés", "Vichada"];

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
	genero = document.getElementsByName("genero");
	x = document.getElementById("login");
	y = document.getElementById("registro");
	z = document.getElementById("elegir");

	usuariotxt = document.getElementById("usuario");
	clavetxt = document.getElementById("password");
	correotxt = document.getElementById("correo");
	nomtxt = document.getElementById("nombre");
	apelltxt = document.getElementById("apellidos");
	userName = document.getElementById("userA");
	userPw = document.getElementById("claveA");
	LlenarDepartamentos();
	asignarEventos();
}

function login(){
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0px";
}

function registrar(){
	x.style.left = "-400px";
	y.style.left = "50px";
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

function validacion() {
	let password = document.f1.password;
	let password2 = document.f1.password2;
	let form = document.f1;
    let indice = select_departamentos.selectedIndex;

    if (form.nombre.value ==0 ){
		form.nombre.value="";
		form.nombre.focus();
		return false;
	}else if (form.apellidos.value ==0 ){
		form.apellidos.value="";
		form.apellidos.focus();
		return false;
	}else if( indice == null || indice == 0 ) {
		alert('Seleccione un departamento');
         return false;
	}else if (form.usuario.value ==0 ){
		form.usuario.value="";
		form.usuario.focus();
		 return false;
	}else if(form.correo.value ==0){
		form.correo.value="";
		form.correo.focus();
		return false;
	}else if(password.value != password2.value){
       password.value="";
       password2.value="";
       alert("Las contraseñas son distintas...");
   	   return false;
	}else if(password.value == 0 || password2.value==0){
       password.value="";
       password2.value="";
       alert("Ingrese una contraseña");
   	   return false;
	}else{
		GuardarLocalStorage();
	}
}

function GuardarLocalStorage(){
	contrl = true;
    let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
	
	if(ListaUsuarios!=null){
		//validar usario unico
		var tm = ListaUsuarios.length;
		for(var i=0; i<tm;i++){
	        if(usuariotxt.value == ListaUsuarios[i].usuario){
	            alert('El usuario ' + usuariotxt.value +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
        //validar correo unico
	    for(var i=0; i<tm;i++){
	        if(correotxt.value == ListaUsuarios[i].correo){
	            alert('El correo ' + correotxt.value +' ya existe');
	            contrl = false;
	            break;
	        }
	    }
	}

    if (contrl!=false){
    	let persona = {
			nombre: nomtxt.value,
			apellidos: apelltxt.value,
			usuario: usuariotxt.value,
			departamento: select_departamentos.value,
			ciudad: select_ciudad.value,
			genero: genero.value,
            correo: correotxt.value,
            clave: clavetxt.value,
        };

        oldInfo = JSON.parse(localStorage.getItem("lista"));

	    if(!(oldInfo instanceof Array)){
	        oldInfo = []; 
	        oldInfo.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(oldInfo));
	    }else{
	        oldInfo.push(persona); 
	        localStorage.setItem("lista", JSON.stringify(oldInfo));
	    }
	    document.forms[0].reset(); // limpliar el formulario
	    alert('Su cuenta ha sido creada');
    }	
	
}
	
function asignarEventos(){
	var btn_accion = document.getElementById("btn1");
	btn_accion.addEventListener("click", Verificar);
}

function Verificar(){
    if(localStorage.getItem("lista")){
        //existe lista en le local storage
        var variable = 1;
 
        let ListaUsuarios = JSON.parse(localStorage.getItem("lista"));
        var tm = ListaUsuarios.length;
        for(var i=0; i<tm;i++){
             if(userName.value == ListaUsuarios[i].usuario && userPw.value == ListaUsuarios[i].clave){
                variable = -1;
                //location.href = "../paginas/principal.html";
                break;
            }
        }
        if(variable==1){
              alert('Error en el login');
              document.forms[0].reset(); // limpliar el formulario
              return false;
        }else if(variable = -1){
        	//alert('Has iniciado sesion');
        	return true;
        }
    }else{
        return false;
        alert('Error: No hay entradas en el local storage');
    }
}