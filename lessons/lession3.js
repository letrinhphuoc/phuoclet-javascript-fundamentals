//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo","Toyota","Tesla"]
}

// Dot notation
customer.firstName = 'Mike';
// Bracket Notation
customer['lastName'] = 'Sliver';
console.log(`${customer.firstName} ${customer.lastName}`);


//arrays: 
var car = ["Volvo","Toyota","Tesla"];
car[1] = "BMW";
console.log(car[1]);
console.log(customer.cars[1]);

//Summarize: 
// Object is defined by curly braces, and the information inside of object is saved, in the format of key and value pairs and key and value pair is separated by colon
// each key value separated by coma 
/*
Arrays are defined by square braces and keep just a values inside of the arrays
*/