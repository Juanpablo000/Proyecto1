let select_ciudad, select_departamentos, genero, x,y,z,nom,apell,correo,contraseña, user, pss;
let departamentos = ["Seleccione", "Antioquia", "Arauca", "Valle del Cauca"];

let ciudades = [];
ciudades[0] = ["medellin|Medellín","envigado|Envigado","sabaneta|Sabaneta","bello|Bello"];
ciudades[1] = ["cali|Cali","buga|Buga","palmira|Palmira","cartago|Cartago"];
ciudades[2] = ["arauca|Arauca","arauquita|Arauquita","saravena|Saravena"];
ciudades[3] = ["bituima|Bituima","chipaque|Chipaque","ubaque|Ubaque","cota|Cota"];
ciudades[4] = ["santa Marta|Santa Marta","algarrobo|Algarrobo","concordia|Concordia"];

window.onload = ()=>{
	select_departamentos = document.getElementById("select-departamentos");
	select_ciudad = document.getElementById("select-ciudad");
	genero = document.getElementsByName("genero");
	x = document.getElementById("login");
	y = document.getElementById("registro");
	z = document.getElementById("elegir");
	correo = document.getElementById("correo").value;
	nom = document.getElementById("nombre").value;
	apell = document.getElementById("apellidos").value;
	usr = document.getElementById("usuario").value;
	pss = document.getElementById("password").value;
	LlenarDepartamentos();
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

    select_departamentos = document.getElementById("select-departamentos");
    for(var i=0; i<departamentos.length;i++){
        var option = document.createElement("option"); 
        option.innerHTML = departamentos[i]; 
        select_departamentos.appendChild(option); 
    }
}


function conversion(valor){
	let indice=-1;
	if(valor=="Antioquia"){
		indice = 0;
	}else if(valor=="Valle del Cauca"){
		indice = 1;
	}else if(valor=="Arauca"){
		indice =2;
	}
	return indice;
}

function LlenarCiudades(){
	let aregloOpciones, salida, posicion;
	select_ciudad.innerHTML = "";
	salida = select_departamentos.value;
	
	posicion = conversion(salida);

	if(posicion>-1){
		ArregloOpciones=ciudades[posicion];
		for(var opcion in ArregloOpciones){
			var arreglo = ArregloOpciones[opcion].split("|");
			var nuevaOpcion = document.createElement("option");
			nuevaOpcion.value = arreglo[0];
			nuevaOpcion.innerHTML = arreglo[1];
			select_ciudad.options.add(nuevaOpcion);
		}
	}
}


function validacion() {
	let password = document.f1.password;
	let password2 = document.f1.password2;
	let form = document.f1;
    let indice = select_departamentos.selectedIndex;
	let opciones = genero;
	let seleccionado = false;
	let control = true;

    if (password.value != password2.value){
       password.value="";
       password2.value="";
       alert("Las dos contraseñas son distintas...");
       control = false;
       return control;
    }

	if( indice == null || indice == 0 ) {
		alert('Seleccione un departamento');
		/*select_departamentos.style.border = '2px solid red';*/
        form.select-departamentos.focus();
        control = false;
  		return control;
	}
	
	if (form.nombre.value ==0 ){
		form.nombre.value="";
		form.nombre.focus();
		control = false;
		return control;
	}

	if (form.apellidos.value ==0 ){
		form.apellidos.value="";
		form.apellidos.focus();
		control = false;
		return control;
	}

	if (form.usuario.value ==0 ){
		form.usuario.value="";
		form.usuario.focus();
		control = false;
		return control;
	}

	for(var i=0; i<opciones.length; i++) {
  		if(opciones[i].checked) {
    		seleccionado = true;
    		break;
  		}
	}

	if(!seleccionado) {
		control = false;
  		return control;
	}
	

}
