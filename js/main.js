function LlenarCiudades(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Antioquia"){
		var ArregloOpciones = ["medellin|Medellín","envigado|Envigado","sabaneta|Sabaneta","bello|Bello"];
	} else if(s1.value == "Valle del Cauca"){
		var ArregloOpciones = ["cali|Cali","buga|Buga","palmira|Palmira","cartago|Cartago"];
	} else if(s1.value == "Arauca"){
		var ArregloOpciones = ["arauca|Arauca","arauquita|Arauquita","saravena|Saravena"];
	}else if(s1.value == "Cundinamarca"){
		var ArregloOpciones = ["bituima|Bituima","chipaque|Chipaque","ubaque|Ubaque","cota|Cota"];
	} else if(s1.value == "Magdalena"){
		var ArregloOpciones = ["santa Marta|Santa Marta","algarrobo|Algarrobo","concordia|Concordia"];
	}
	for(var opcion in ArregloOpciones){
		var arreglo = ArregloOpciones[opcion].split("|");
		var nuevaOpcion = document.createElement("option");
		nuevaOpcion.value = arreglo[0];
		nuevaOpcion.innerHTML = arreglo[1];
		s2.options.add(nuevaOpcion);
	}
}


function validacion() {
	password = document.f1.password.value;
    password2 = document.f1.password2.value;

    if (password != password2){
       document.f1.password.value="";
       document.f1.password2.value="";
       alert("Las dos contraseñas son distintas...");
       return false;
    }

	form = document.f1;
    indice = document.getElementById("select-departamentos").selectedIndex;
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

	opciones = document.getElementsByName("genero");
	var seleccionado = false;
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