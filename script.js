function LlenarCiudades(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Antioquia"){
		var optionArray = ["|","medellin|Medellín","envigado|Envigado","sabaneta|Sabaneta","bello|Bello"];
	} else if(s1.value == "Valle del Cauca"){
		var optionArray = ["|","cali|Cali","buga|Buga","palmira|Palmira","cartago|Cartago"];
	} else if(s1.value == "Arauca"){
		var optionArray = ["|","arauca|Arauca","arauquita|Arauquita","saravena|Saravena"];
	}else if(s1.value == "Cundinamarca"){
		var optionArray = ["|","bituima|Bituima","chipaque|Chipaque","ubaque|Ubaque","cota|Cota"];
	} else if(s1.value == "Magdalena"){
		var optionArray = ["|","santa Marta|Santa Marta","algarrobo|Algarrobo","concordia|Concordia"];
	}
	for(var opcion in optionArray){
		var arreglo = optionArray[opcion].split("|");
		var newOption = document.createElement("option");
		newOption.value = arreglo[0];
		newOption.innerHTML = arreglo[1];
		s2.options.add(newOption);
	}
}

function comprobarClave(){
    password = document.f1.password.value
    password2 = document.f1.password2.value

    if (password != password2){
       document.f1.password.value="";
       document.f1.password2.value="";
       alert("Las dos contraseñas son distintas...");
    }
       
   		
}