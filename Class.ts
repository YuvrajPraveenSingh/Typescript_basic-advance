
interface Address {
  street : string ;
  city : string ;
  state : string;
  pin : number;
}

class Employee {
  #id : number; // private variable
 protected name : string ;
  address : Address ;
  // getter and setter 
  get empId(): number {
    return this.#id
  }
  set empId(id : number) {
    this.#id = id;
  }
  // constructor in typescript
  constructor( id : number , name : string , address : Address){
    this.#id = id ;
    this.name = name;
    this.address = address;
  }
  // methods static and non-static
  getName() : string {
    return this.name;
  } 
  static emplyeeCount() : number {
    return 50;
  }
}
// inheritance 
class Manager extends Employee{
  constructor( id : number , name : string , address : Address){
    super(id , name , address)
  }
}
// example code 
class Thing {
  _size = 0;
  get size(): number {
    return this._size;
  }
  set size(value: string | number | boolean) {
    let num = Number(value);
    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
    this._size = num;
  }
}

// driver code 
let raj : Manager = new Manager(2 , "raj sigal",  
{ street: "ABC" ,
 city : "bangalore" , 
 state :  "karnatak"  , 
 pin : 59001} );

let yuvraj : Employee = new Employee(1 , "yuvraj Singh" ,  {
  street: "XYZ" ,
  city : "mumbai" ,
  state :  "Maharasta"  ,
  pin : 55986} );

console.log(yuvraj);
 let res =yuvraj.address;
console.log(res);
console.log(raj.getName());
console.log(Employee.emplyeeCount())


