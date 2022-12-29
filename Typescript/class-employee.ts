import { user , address , Employees} from "./interface" ;

class Employee_detail {
  pesonal_detail: Employees;
  employee_Address: address;

  constructor(detail: Employees, Address: address) {
    this.pesonal_detail = detail;
    this.employee_Address = Address;
  }
}

//object destructring in typescript
let {name : userName , email : userLogin}: user = {
  name :"yuv",
  id : 25,
  age : 21,
  email : "xyz@yourcompanyname.com "
}

//Array destructring in typescript....
let [emp1 , emp2 , ...restUser] : user[] = [
{
  name : "Yuvraj singh01",
  id : 1,
  email : " yuvrajsingh@yourcompanyname.com ",
},
{
    
  name : "Yuvraj singh02",
  id : 2,
  email : " yuvrajsingh@yourcompanyname.com ",
  

},
{
  name : "Yuvraj singh03",
  id : 3,
  email : " yuvrajsingh@yourcompanyname.com ",
}]

//driver code 
let obj1 = new Employee_detail(
{
  name : "Yuvraj singh",
  id : 3,
  email : " yuvrajsingh@yourcompanyname.com ",
  department : " Your Department " ,
  salary : 50000  
},
{
  street : "XYZ",
  city : "Kolkata",
  state : "West Bengal",
  pin : 500971 
}
);
console.log(userName);
console.log(userLogin);
console.log(obj1.pesonal_detail.name);
console.log(emp1.name);
console.log(emp2.name);

let res = restUser.filter(user => user.id ===3)
console.log(res);