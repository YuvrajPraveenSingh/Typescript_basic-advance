// var types--
for (let i: number = 0; i < 5; ++i) {
  let line: string = "";
  for(let j: number = 0; j <= i; ++j) {
    line += "*";
  }
  console.log(line);
}
let isValid : boolean = false;
console.log(isValid)

// array--
let empList : string[];
let depList : Array<number>;
empList = ['hey', 'hello,' , 'hi'];
depList =[1,5,68,26];
let res = depList.filter((num) => num>50);  // fillter method
let result = depList.find((num) => num === 26); // find Method
let rs = depList.findIndex((num) => num ===5)
let r = depList.reduce((acc , num ) => acc + num );
console.log(res);
console.log(result);
console.log(rs);
console.log(r);

// enum ---
const enum Color{
  Red,
  Green,
  Blue
}
let c : Color = Color.Blue;

// tuples -- to swap no.
let swapnumbs :[number , number];
function swapnumbers(num1 : number , num2 :number):[number , number]{
  return [num2 ,num1]
}
swapnumbs = swapnumbers(20 ,10)
console.log(swapnumbs)
 