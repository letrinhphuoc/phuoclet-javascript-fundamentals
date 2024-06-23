// Logical "AND"
console.log(true && true); // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(false || true); // any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true;
var isUSCitizen = false;

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen;
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense);


//Logical "NOT"
console.log(!true) // Exclamation ->!
console.log(6 !==10);