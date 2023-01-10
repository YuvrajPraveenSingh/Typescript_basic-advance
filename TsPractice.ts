//Example: Type Annotation in TypeScript
var age: number = 32; // number variable
var Name: string = "John";// string variable
var isUdated: boolean = true;// Boolean variable

//Example: Type Annotation in Object
var employee: {
  id: number;
  name: string;
};
employee = {
  id: 1,
  name: "Yuvraj Singh "
}

// Number  methods

//Example: TypeScript Number Type Variables
let first: number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third: number = 0o377;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

//Example: toExponential()
let myNumber: number = 123456;
myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5

//Example: toFixed()
let myNum: number = 10.8788;
myNum.toFixed(); // returns 11
myNum.toFixed(1); //returns 10.9
myNum.toFixed(2); //returns 10.88
myNum.toFixed(3); //returns 10.879
myNum.toFixed(4); //returns 10.8788

// Example: toString()
let myNumb: number = 123;
myNumb.toString(); // returns '123'
myNumb.toString(2); // returns '1111011'
myNumb.toString(4); // returns '1323'
myNumb.toString(8); // returns '173'
myNumb.toString(16); // returns '7b'
myNumb.toString(36); // returns '3f'

let num1 = new Number(123);
console.log(num1) //Output: a number object with value 123
console.log(num1.valueOf()) //Output: 123
console.log(typeof num1) //Output: object

let num2 = num1.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number

//<------------------------------------------------------------------------------------------------>

//String methods
let str = ' hello Typescript ';
str.charAt(0);// returns 'H'
"Helloworld".charAt(2); // returns 'l'
 
let str1 = "Hello";
let str2 = 'Typescript';
str1.concat(str2);  // returns 'HelloTypeScript'
str1.concat(' ',str2 ); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'


let str3 = 'TypeScript';/
str3.indexOf('T'); // returns 0
str3.indexOf('p'); // returns 2
str3.indexOf('e'); // returns 3
str3.indexOf('T', 1); // returns -1
str3.indexOf('t', 1); // returns 9

