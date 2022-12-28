class Employee {
  #id : number; // private variable
 protected name : string ;
  address : string ;
  // getter and setter 
  get empId(): number {
    return this.#id
  }
  set empId(id : number) {
    this.#id = id;
  }
  // constructor in typescript
  constructor( id : number , name : string , address : string){
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
  constructor( id : number , name : string , address : string){
    super(id , name , address)
  }

}

// driver code 

let raj : Manager = new Manager(2 , "raj sigal" , "marine drive , mumbai");
let yuvraj : Employee = new Employee(1 , "yuvraj Singh" ,  "earth milkyWay");
console.log(yuvraj);
 let res : string =yuvraj.getName();
console.log(res);
console.log(raj.getName());
console.log(Employee.emplyeeCount())
