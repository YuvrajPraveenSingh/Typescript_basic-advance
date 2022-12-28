function add(a, b ){
  return a+ b
}
function Add(a : number , b : number) : number
  {
    return a+ b;
  }
console.log( add(3 ,'33'), Add(3 ,33));

const sub = (n1 : number , n2 : number ):number => n1 - n2 ;
const mult = function(n1 : number , n2 : number) :number{
  return n1 * n2
}
console.log( sub(36 ,33), mult(3 ,33));

// optional n3 variable
function Addition(a : number , b : number , c? : number ) : number
{
    //optional chaining ..... 
    return c? a+ b +c : a + b;
  }
console.log( Addition(3 ,3), Addition(3 ,3 , 3));

function add2(a :number , b : number , ...c : number[]) :number{
  return a + b + c.reduce((acc , num) => acc + num ) ;
}
// rest function
let num : number[] = [2 ,22 ,12];
console.log("add2 function : " + add2(3 ,2 , ...num));
//  geniric function  

function getItem<type>(items : type[]) :type[] {
  return new Array<type>().concat(items);
}
let concatResult1 = getItem([2 ,22 ,12]);
let concatResult2 = getItem(["2" , '22' , '12']);
console.log(concatResult1);
console.log(concatResult2);