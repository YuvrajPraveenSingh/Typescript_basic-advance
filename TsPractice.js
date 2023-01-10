//Example: Type Annotation in TypeScript
var age = 32; // number variable
var Name = "John"; // string variable
var isUdated = true; // Boolean variable
//Example: Type Annotation in Object
var employee;
employee = {
    id: 1,
    name: "Yuvraj Singh "
};
// Number  methods
//Example: TypeScript Number Type Variables
var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
//Example: toExponential()
var myNumber = 123456;
myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5
//Example: toFixed()
var myNum = 10.8788;
myNum.toFixed(); // returns 11
myNum.toFixed(1); //returns 10.9
myNum.toFixed(2); //returns 10.88
myNum.toFixed(3); //returns 10.879
myNum.toFixed(4); //returns 10.8788
// Example: toString()
var myNumb = 123;
myNumb.toString(); // returns '123'
myNumb.toString(2); // returns '1111011'
myNumb.toString(4); // returns '1323'
myNumb.toString(8); // returns '173'
myNumb.toString(16); // returns '7b'
myNumb.toString(36); // returns '3f'
var num1 = new Number(123);
console.log(num1); //Output: a number object with value 123
console.log(num1.valueOf()); //Output: 123
console.log(typeof num1); //Output: object
var num2 = num1.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: number
//<------------------------------------------------------------------------------------------------->
//String methods
var str = ' hello Typescript ';
var str1 = "Hello";
var str2 = 'Typescript';
var str4 = 'Hello Javascript';
var str5 = 'Apple, Banana, Orange';
var str6 = ',';
str.charAt(0); // returns 'H'
"Helloworld".charAt(2); // returns 'l'
str1.concat(str2); // returns 'HelloTypeScript'
str1.concat(' ', str2); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'
str2.indexOf('T'); // returns 0
str2.indexOf('p'); // returns 2
str2.indexOf('e'); // returns 3
str2.indexOf('T', 1); // returns -1
str2.indexOf('t', 1); // returns 9
str4.replace('Java', 'Type'); // returns 'Hello TypeScript'
str4.replace('Javascript', str2); // returns 'Hello TypeScript'
str4.replace(/Hello/gi, 'Hi'); // returns 'Hi TypeScript'
str5.split(str6); // returns [ 'Apple', ' Banana', ' Orange' ]
str5.split(','); // returns [ 'Apple', ' Banana', ' Orange' ]
str5.split(',', 2); // returns [ 'Apple', ' Banana' ]
str5.split(',', 1); // returns [ 'Apple']
str.toLowerCase(); // returns hello typescript
'HELLO TYPESCRIPT'.toLowerCase(); // returns hello typescript
str.toUpperCase(); // returns 'HELLO TYPESCRIPT'
'hello typescript'.toUpperCase(); // returns 'HELLO TYPESCRIPT'
//<------------------------------------------------------------------------------------------------->
var fruits = ['Apple', 'Orange', 'Banana'];
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
var values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
//TypeScript Array Methods
for (var index in fruits)
    console.log('1', fruits[index]); // output: Apple Orange Banan
for (var i = 0; i < fruits.length; i++)
    console.log('2', fruits[i]); // output: Apple Orange Banana
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.pop()); //output: Orange
fruits.push('Papaya');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
console.log(fruits.copyWithin(1,0 ,3)  ); //output: 2

