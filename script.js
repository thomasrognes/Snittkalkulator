function changeInt() {
	document.getElementById('sum').innerHTML = '4';
}

function calculateGrade(form) {
	if (true) {}
}


// Summerer sammen. 
function sum() {
	var karakterer = document.getElementsByName('karakter');
	var studiepoeng = document.getElementsByName('studiepoeng');
	var karakterVekt;  
	var karakterPoeng = [];
	var karakterSum = 0;
	var studiepoengSum = 0; 


	// Vektlegger karakterene etter antall studiepoeng og legger de inn i et array. 
	for (i = 0; i < karakterer.length; i++) {
		if (karakterer[i].value) {
		karakterVekt = parseInt(karakterer[i].value) * parseFloat(studiepoeng[i].value);
		karakterPoeng.push(karakterVekt);
		}
	}

	// Legger sammen summen av karakterene 
	for (k = 0; k < karakterPoeng.length; k++) {
			karakterSum += karakterPoeng[k];
	}

	// Legger sammen summen av studiepoengene
	for(j = 0; j < studiepoeng.length; j++) {
		if (studiepoeng[j].value) {
		studiepoengSum += parseFloat(studiepoeng[j].value); 
		}
	}

	// Finner ut karaktersnittet
	var sum = karakterSum / studiepoengSum;
		
	// Sjekker om feltene er tomme og gir tilbakemelding dersom det er tilfelle. 
	if (sum > 0) {
		document.getElementById('sum').innerHTML = "Ditt snitt er " + sum;
	} else {
		alert("Vennligst sett inn karakterer og antall studiepoeng.");
	}

}
	

// Legger til nye rekker
function addRows(){
	var karakterParent = document.getElementById("karakterform");
	var karakterInput = document.createElement("input");
	karakterInput.type = "text"; 
	karakterInput.name = "karakter";
	karakterInput.className = "inputfield";
	karakterInput.placeholder = "Karakter";

	var studiepoengParent = document.getElementById("studiepoengform");
	var studiepoengInput = document.createElement("input");
	studiepoengInput.type = "number"; 
	studiepoengInput.name = "studiepoeng";
	studiepoengInput.className = "inputfield";
	studiepoengInput.placeholder = "Studiepoeng";

	karakterParent.appendChild(karakterInput);
	studiepoengParent.appendChild(studiepoengInput);
}			