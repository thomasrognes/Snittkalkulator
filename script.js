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
	var karakterSum = 0;
	var studiepoengSum = 0;  

	// legger sammen summen av karakterene
	for (i = 0; i < karakterer.length; i++) {
		if (karakterer[i].value) {
		karakterSum += parseInt(karakterer[i].value); 
		}
	}

	// Legger sammen summen av studiepoengene
	for(j = 0; j < studiepoeng.length; j++) {
		if (studiepoeng[j].value) {
		studiepoengSum += parseInt(studiepoeng[j].value); 
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
	

// Lager nye rekker
function addRows(){
	var karakterParent = document.getElementById("karakterform");
	var karakterInput = document.createElement("input");
	karakterInput.type = "number"; 
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