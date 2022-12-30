"use strict";
class Employee_detail {
  constructor(detail, Address) {
    this.pesonal_detail = detail;
    this.employee_Address = Address;
  }
}
let { name: userName, email: userLogin } = {
  name: "yuv",
  id: 25,
  age: 21,
  email: "xyz@yourcompanyname.com "
};
let [emp1, emp2, ...restUser] = [
  {
    name: "Yuvraj singh01",
    id: 1,
    email: " yuvrajsingh@yourcompanyname.com "
  },
  {
    name: "Yuvraj singh02",
    id: 2,
    email: " yuvrajsingh@yourcompanyname.com "
  },
  {
    name: "Yuvraj singh03",
    id: 3,
    email: " yuvrajsingh@yourcompanyname.com "
  }
];
let obj1 = new Employee_detail(
  {
    name: "Yuvraj singh",
    id: 3,
    email: " yuvrajsingh@yourcompanyname.com ",
    department: " Your Department ",
    salary: 5e4
  },
  {
    street: "XYZ",
    city: "Kolkata",
    state: "West Bengal",
    pin: 500971
  }
);
console.log(userName);
console.log(userLogin);
console.log(obj1.pesonal_detail.name);
console.log(emp1.name);
console.log(emp2.name);
let res = restUser.filter((user2) => user2.id === 3);
console.log(res);
//# sourceMappingURL=class-employee.js.map
