var customerFistName: string = "John";
var customerLastName: string = "Smith";
var customerAge: number = 25;

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}

/**
 * The main difference between TypeScript and JavaScript is adding support of the strict typing. The strict typing is defined with this syntax variable
 * name colon, and the you define the type. You can use the primitive data types such as string, boolean, number and Also in TypeScript you can create
 * your own custom data type and use those datas to control the integrity of your data during the coding
 */