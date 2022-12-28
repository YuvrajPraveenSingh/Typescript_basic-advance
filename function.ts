function add(a, b ){
  return a+ b
}
function Add(a : number , b : number) : number
  {
    return a+ b;
  }

console.log( add(3 ,'33'), Add(3 ,33))

const sub = (n1 : number , n2 : number ):number => n1 - n2 ;
const mult = function(n1 : number , n2 : number) :number{
  return n1 * n2
}
console.log( sub(36 ,33), mult(3 ,33))

// optional n3 variable
function Addition(a : number , b : number , c? : number ) : number
{
    //optional chaining ..... 
    return c? a+ b +c : a + b;
  }
console.log( Addition(3 ,3), Addition(3 ,3 , 3))