 
var temperature = parseFloat(prompt("Enter the Current Temperature in Celsius:"));
 
if (temperature > 30) {
    alert("It's a hot day!");
} else {
    alert("The weather is moderate.");
}


 
 
var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
 
var averageMarks = (subject1 + subject2 + subject3) / 3;
 
if (averageMarks >= 90) {
    alert("Grade: A+");
} else if (averageMarks >= 80) {
    alert("Grade: A");
} else if (averageMarks >= 70) {
    alert("Grade: B");
} else if (averageMarks >= 60) {
    alert("Grade: C");
} else if (averageMarks >= 50) {
    alert("Grade: D");
} else {
    alert("Grade: F");
}

