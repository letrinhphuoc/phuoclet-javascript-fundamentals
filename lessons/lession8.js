// Declarative function
helloOne();
function helloOne(){
    console.log('Hello one!');
}
// helloOne();

// Anonymous function
var helloTwo = function(){
    console.log('Hello Two!');
}
helloOne();

//ES6 function syntax or arrow funtion
var helloThree = () => {
    console.log('Hello three!');
}
helloThree();

// Function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName);
}
printName('Jonh', 'Smith');

// Function with return
function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(20);
console.log(myResult);

// immport function
import {printAge} from '../helpers/printHelper.js';
printAge(5);

// Import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10);

// Summarize

/**
 * So function can be declarative and anonymous.
 * Declarative function : start with the keyword function, provide the name of the function parentheses and then inside of the curly braces you provide
 * the code that you want to put inside of the function. 
 * 
 * Annonymous function -> does not have a name That why it's called Anonymous and then you need to assign the result of this function to the variable and then
 * you can call this variable as the result call the function
 * 
 * Another syntax is call the 'Arrow function', which is used also anonymous function, just the fat arrow syntax. And inside of the curly braces you put the code of the
 * function and then call it. 
 * 
 * Also, you can provide as many arguments to the function as you want. The values that you inside of the parentheses of the function. 
 * Call the parameters of the function and the values that you pass into the functions are the arguments. 
 */