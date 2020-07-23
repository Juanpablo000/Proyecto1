let select_ciudad, select_departamento, genero;
let departamentos = [];
departamentos[0] = "Antioquia";

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
}

function LlenarCiudades(){
	let ArregloOpciones;
	select_ciudad.innerHTML = "";
	ArregloOpciones=ciudades[select_departamentos.value];
	for(var opcion in ArregloOpciones){
		var arreglo = ArregloOpciones[opcion].split("|");
		var nuevaOpcion = document.createElement("option");
		nuevaOpcion.value = arreglo[0];
		nuevaOpcion.innerHTML = arreglo[1];
		select_ciudad.options.add(nuevaOpcion);
	}
}


function validacion() {
	let password = document.f1.password;
	let password2 = document.f1.password2;
	let form = document.f1;
    let indice = select_departamentos.selectedIndex;
	let opciones = genero;
	let seleccionado = false;

    if (password.value != password2.value){
       password.value="";
       password2.value="";
       alert("Las dos contraseñas son distintas...");
       return false;
    }

	if( indice == null || indice == 0 ) {
		alert("Selecciona un departamento");
        form.select-departamentos.focus();
  		return false;
	}
	
	if (form.nombre.value ==0 ){
		form.nombre.value="";
		form.nombre.focus();
	}

	if (form.apellidos.value ==0 ){
		form.apellidos.value="";
		form.apellidos.focus();
	}

	if (form.usuario.value ==0 ){
		form.usuario.value="";
		form.usuario.focus();
	}

	for(var i=0; i<opciones.length; i++) {
  		if(opciones[i].checked) {
    		seleccionado = true;
    		break;
  		}
	}

	if(!seleccionado) {
  		return false;
	}

}