
// Function that converts letters (Grades) to number. 
function calculateGrade(input) {
	var numberToReturn; 
	var checkString = input.toLowerCase();
	console.log(checkString);

	if (checkString == "a") {
		numberToReturn = 5; 
	} else if (checkString == "b") {
		numberToReturn = 4; 
	} else if (checkString == "c") {
		numberToReturn = 3; 
	} else if (checkString == "d") {
		numberToReturn = 2; 
	} else if (checkString == "e") {
		numberToReturn = 1; 
	} else if (checkString == "f") {
		numberToReturn = 0; 
	}
	return numberToReturn; 
}


// Function which find out the GPA.  
function sum() {
	var grades = document.getElementsByName('karakter'); //
	var credits = document.getElementsByName('studiepoeng');
	var gradeWeight;  
	var gradePoints = [];
	var gradeSum = 0;
	var creditSum = 0; 

	// Weights the grades after credits and put them in an array. 
	for (i = 0; i < grades.length; i++) {
		if (grades[i].value) {
		gradeWeight = calculateGrade(grades[i].value) * parseFloat(credits[i].value);
		gradePoints.push(gradeWeight);
		}
	}

	// Adds the sum of the grades to gradeSum
	for (k = 0; k < gradePoints.length; k++) {
			gradeSum += gradePoints[k];
	}

	// Adds the sum of the credits to creditSum
	for(j = 0; j < credits.length; j++) {
		if (credits[j].value) {
		creditSum += parseFloat(credits[j].value); 
		}
	}

	// Finds out the GPA.
	var sum = gradeSum / creditSum;
		
	// Checks if the fields are empty and gives feedback if that is the case.  
	if (sum > 0) {
		document.getElementById('sum').innerHTML = "Ditt snitt er " + sum;
		document.getElementById('karakterInfo').innerHTML = "A = 5 <br>\
															B = 4 <br>\
															C = 3 <br>\
															D = 2 <br>\
															E = 1 <br>";
															
	} else {
		alert("Vennligst sett inn grades og antall credits. grades skrives inn i bokstavform (A-F).");
	}
}
	

// Adds new rows. 
function addRows(){
	var gradeParent = document.getElementById("karakterform");
	var gradeInput = document.createElement("input");
	gradeInput.type = "text"; 
	gradeInput.name = "karakter";
	gradeInput.className = "inputfield";
	gradeInput.placeholder = "Karakter";
	gradeInput.maxLength = "1";

	var creditParent = document.getElementById("studiepoengform");
	var creditInput = document.createElement("input");
	creditInput.type = "number"; 
	creditInput.name = "credits";
	creditInput.className = "inputfield";
	creditInput.placeholder = "credits";

	gradeParent.appendChild(gradeInput);
	creditParent.appendChild(creditInput);
}			
